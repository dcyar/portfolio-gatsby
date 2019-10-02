import React from 'react'

import Layout from '../layouts/Layout'
import Head from '../components/Head'

import contactStyles from './css/contact.module.css'

const ContactPage = () => {
    return (
        <Layout>
            <Head title='Contact' />
            <h2>Send me a message.-</h2>
            <div className={contactStyles.contact}>
                <p className={contactStyles.item}>
                    Email:
                    <span>
                        <a href='mailto:jachata.m@gmail.com'>jachata.m@gmail.com</a>
                    </span>
                </p>
                <p className={contactStyles.item}>
                    Github:
                    <span>
                        <a href='https://github.com/dcyar/' target='_blank' rel='noreferrer'>https://github.com/dcyar/</a>
                    </span>
                </p>
                <p className={contactStyles.item}>
                    Twitter:
                    <span>
                        <a href='https://twitter.com/dcyar444' target='_blank' rel='noreferrer'>https://twitter.com/dcyar444/</a>
                    </span>
                </p>
                <p className={contactStyles.item}>
                    Instagram:
                    <span>
                        <a href='https://instagram.com/dcyar' target='_blank' rel='noreferrer'>https://instagram.com/dcyar/</a>
                    </span>
                </p>
            </div>
        </Layout>
    )
}

export default ContactPage