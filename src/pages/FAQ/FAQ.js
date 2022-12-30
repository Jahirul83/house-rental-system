import React from 'react';

const FAQ = () => {
    return (
        <section className="mt-12 mb-44">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 display-5 font-weight-bolder text-primary text-center text-uppercase">how it works</p>
                <h2 className="mb-5 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col ms-5">
                    <details>
                        <summary className="py-2">What services available on Rents?</summary>
                        <div className="px-4 pb-4">
                            <p>We provide all rental solution, e.i Residential apartment, Furnished apartment, Service apartment, Commercial space, Office space, Retail shop, Restaurant space and full building searching, arrange property viewing, price negotiation and helps to prepare rental agreement for owner and tenant.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2">Should I pay any fees?</summary>
                        <div className="px-4 pb-4">
                            <p>Our system does not allow to take any fees from tenant. </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2">Which area rents cover in Chattagram?</summary>
                        <div className="px-4 pb-4">
                            <p>Right now Rents team cover three different areas like Agrabad, Ak Khan and Chawkbazar Zone.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2">How do I place my requirements?</summary>
                        <div className="px-4 pb-4">
                            <p>Very simple…. just visit our web portal, see properties in your required areas and place it through mobile number direct call. Recently our tech team introduce ‘Rental query form’ for tenants, just fill up and submit. Our dedicated rental agent will get back as early as possible and serve your required properties.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2">Will Rents send me a soft copy of the rental agreement??</summary>
                        <div className="px-4 pb-4">
                            <p>Without check back from the tenant side Rents team never go proceed any rental agreement with property owner.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2">How do I add my property on Rents web portal?</summary>
                        <div className="px-4 pb-4">
                            <p>We have ‘Add Property’ options in our website. Just visit Rents.com.bd, click on ‘Add Property’, fill up the form properly and submit. Our property agent contact you, visit your property, do MOU with property owner and listing property on our website.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;