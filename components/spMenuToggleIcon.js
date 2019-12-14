import {Menu} from 'react-feather';
import React from 'react';

const $ = require('jquery');

/**
 * Menu toggle button used in common header.
 * This is shown only in mobile mode (when display is narrower than 768px)
 */
export default class SpMenuToggleIcon extends React.Component {
    toggle = () => {
        // Doing jQuery-way instead of React-way because
        // this is mobile-exclusive process in responsive style pages.
        const navigationBox = $('#navigation');
        const isHidden = navigationBox.css('display') === 'none';
        if (isHidden) {
            navigationBox.show("slow");
        } else {
            navigationBox.hide("slow");
        }
        $(window).off('resize').on('resize', () => {
            // Clearing ad-hoc state upon resize.
            // This is because the navigation should always be available
            // when the width of the window becomes the desktop-size.
            navigationBox.removeAttr('style');
        });
    };

    render() {
        return (
            <div className="md:hidden bg-white text-black border-2 border-white rounded-lg mr-2" onClick={this.toggle}>
                <Menu className="h-10 w-10" />
            </div>
        );
    };
}
