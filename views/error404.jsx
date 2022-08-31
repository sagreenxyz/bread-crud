const React = require('react')
const Default = require('./layouts/default')

function Error404({ reason }) {
    return (
        <Default title={'Error 404'}>
            <h2>Error404 Page</h2>
            <p>{reason}</p>
        </Default>
    )
}

module.exports = Error404
