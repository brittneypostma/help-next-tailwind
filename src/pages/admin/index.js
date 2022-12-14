import Head from "next/head";
import React from "react";
import CMSConfig from "../../CMS/config"
import ProjectPagePreview from "../../templates/ProjectPagePreview/ProjectPagePreview";

export default class CMSapp extends React.Component
{

    async InitCMS()
    {

        const CMS = (await import('netlify-cms-app')).default

        CMS.registerPreviewTemplate("projects", ProjectPagePreview);

        CMS.init({config: CMSConfig});
    }

    componentDidMount()
    {
        if(typeof window !== 'undefined' && window.document)
        {
            this.InitCMS();
        }
    }

    render()
    {
        return(
            // <Head>
            //     <link href="admin/config.yml" type="text/yaml" rel="cms-config-url"></link>
            // </Head>
            <div></div>
        );
    }

}