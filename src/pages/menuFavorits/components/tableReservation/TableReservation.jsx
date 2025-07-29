import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { sendMessage } from '../contactUs/sendMessage.js';
import Counter from '../../../../components/counter';
import Title from '../../../../components/title';
import SendButton from '../../../../components/sendButton';
import styles from './tableReservation.module.css';
import './reactDatepickerOverrides.css';
import Swal from 'sweetalert2';


import DatePicker from 'react-datepicker';

const workingHours = {
    weekdays: {
        open: 9,
        close: 18,
    },
    weekendClosed: true,
};

const TableReservation = ({ isOpen, onClose }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const today = new Date().toISOString().split('T')[0];
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        people: '1',
        date: today,
        time: '',
        comment: '',
    });
    const [errorMessages, setErrorMessages] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        setIsMobile(/android|iphone|ipad|ipod|opera mini|blackberry|webos|windows phone/i.test(userAgent.toLowerCase()));
    }, []);

    useEffect(() => {
        if (modalMessage) {
            const timer = setTimeout(() => setModalMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [modalMessage]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setErrorMessages('');
    };

    const validatePhone = (phone) => {
        const digits = phone.replace(/\D/g, '');
        return /^\d{10,15}$/.test(digits);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, phone, people, date, time } = formData;
        console.log('Selected date:', formData.date);

        if (!name || !phone || !people || !date || !time) {
            setErrorMessages('Please fill in all required fields.');
            return;
        }

        if (!validatePhone(phone)) {
            setErrorMessages('Invalid phone number.');
            return;
        }

        const message = `
<b>Table Reservation Request</b>
<b>Name:</b> ${name}
<b>Phone:</b> ${phone}
<b>People:</b> ${people}
<b>Date:</b> ${date}
<b>Time:</b> ${time}
<b>Comment:</b> ${formData.comment || '-'}
        `;

        if (isMobile) {
            const smsNumber = '000000001';
            const smsMessage = `Reservation: Name: ${name}, Phone: ${phone}, People: ${people}, Date: ${date}, Time: ${time}`;
            window.location.href = `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;
            return;
        }

        try {
            setIsSending(true);
            await sendMessage(message, import.meta.env.VITE_APP_TOKEN, import.meta.env.VITE_APP_ID);

            Swal.fire({
                icon: 'success',
                title: 'Reservation Sent!',
                text: 'Your reservation request has been sent successfully.',
                timer: 3000,
                showConfirmButton: false,
                timerProgressBar: true,
                didOpen: () => {
                    const swalContainer = document.querySelector('.swal2-container');
                    if (swalContainer) swalContainer.style.zIndex = '300';
                }
            });

            setFormData({
                name: '',
                phone: '',
                people: '1',
                date: today,
                time: '',
                comment: '',
            });

            setTimeout(() => {
                onClose();
            }, 1000);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to send reservation. Please try again.',
                confirmButtonColor: '#d33',
            });
        } finally {
            setIsSending(false);
        }
    };

    if (!isOpen) return null;
    return (
            <div className={styles.modal_overlay} onClick={onClose}>
                <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.modal_close} onClick={onClose}>&times;</button>
                    <Title text="Table Reservation" />
                    <form className={styles.table_reservation__form} onSubmit={handleSubmit} noValidate>
                        <div className={styles.table_reservation__fields}>
                            <input
                                    className={styles.table_reservation__input}
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                            />
                            <InputMask
                                    mask="999-999-9999"
                                    maskChar="_"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                            >
                                {(inputProps) => (
                                        <input
                                                {...inputProps}
                                                id="phone"
                                                type="tel"
                                                className={styles.table_reservation__input}
                                                placeholder="Phone"
                                        />
                                )}
                            </InputMask>
                            <div className={styles.wrapper_selectors}>
                                    <p className={styles.selector_label}>Person:</p>
                                    <Counter
                                            quantity={Number(formData.people)}
                                            onIncrease={() => setFormData((prev) => ({ ...prev, people: String(Number(prev.people) + 1) }))}
                                            onDecrease={() => setFormData((prev) => ({ ...prev, people: String(Math.max(1, Number(prev.people) - 1)) }))}
                                            min={1}
                                    />
                                    <p className={styles.selector_label}>Data and time:</p>
                                    <div className={styles.wrapper__data_time}>
                                    <Counter
                                            quantity={formData.time || `${workingHours.weekdays.open.toString().padStart(2, '0')}:00`}
                                            onIncrease={() => {
                                                const currentHour = Number(formData.time?.split(':')[0]) || workingHours.weekdays.open;
                                                const nextHour = Math.min(currentHour + 1, workingHours.weekdays.close - 1);
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    time: `${nextHour.toString().padStart(2, '0')}:00`,
                                                }));
                                            }}
                                            onDecrease={() => {
                                                const currentHour = Number(formData.time?.split(':')[0]) || workingHours.weekdays.open;
                                                const prevHour = Math.max(currentHour - 1, workingHours.weekdays.open);
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    time: `${prevHour.toString().padStart(2, '0')}:00`,
                                                }));
                                            }}
                                            min={workingHours.weekdays.open}
                                            max={workingHours.weekdays.close - 1}
                                    />
                                        <div className={styles.wrapper__time}>
                                            <DatePicker
                                                    selected={formData.date ? new Date(formData.date) : null}
                                                    onChange={(date) => {
                                                        const isoDate = date.toISOString().split('T')[0];
                                                        setFormData((prev) => ({ ...prev, date: isoDate }));
                                                    }}
                                                    minDate={new Date()}
                                                    maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
                                                    dateFormat="EEE, MMM d"
                                                    className={styles.datepicker_input}
                                            />
                                        </div>

                                </div>
                            </div>
                            <textarea
                                    className={styles.table_reservation__textarea}
                                    id="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    placeholder="Additional Comments"
                            ></textarea>
                            <div className={styles.table_reservation__actions}>
                                <div className={styles.table_reservation__error_messages}>
                                    <p>{errorMessages || modalMessage}</p>
                                </div>
                                <SendButton
                                        text={isSending ? 'Sending...' : 'Reserve Table'}
                                        onClick={handleSubmit}
                                        isDisabled={!!errorMessages || isSending}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default TableReservation;
