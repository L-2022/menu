import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // import from react-helmet-async
import { menuData } from '../../data/menuData.js';
// import { servicesSchema } from '../../data/structuredData/StructuredData.js';
import MenuItem from "../MenuItem/index.js";
import Title from "../../../../components/title";

const ServicesList = () => {
    // const schemaData = servicesSchema(menuData); // created JSON-LD for Schema.org

    return (
            <HelmetProvider>
                {/*<Helmet>*/}
                {/*    <script type="application/ld+json">*/}
                {/*        {JSON.stringify(schemaData)}*/}
                {/*    </script>*/}
                {/*</Helmet>*/}
                {/*<Title text={ 'Menu'} />*/}
                <MenuItem />
            </HelmetProvider>
    );
};

export default ServicesList;
