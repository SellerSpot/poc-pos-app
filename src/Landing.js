import React from 'react'

export default function Landing({ tenantDetails }) {
    return (
        <>
            <div><b>Sellerspot POS for the Tenant : </b></div>
            <div><pre>{tenantDetails}</pre></div>
        </>
    )
}
