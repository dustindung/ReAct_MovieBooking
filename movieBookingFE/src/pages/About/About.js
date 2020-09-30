import React, { Component } from 'react'
import DemoHOC from '../HOC/DemoHOC'

export default class About extends Component {
    render() {
        return (
            <div>
                About
                <DemoHOC title={<h1>abc</h1>}>dsafadsafsd                
                </DemoHOC>
            </div>
        )
    }
}
