import React, {PropTypes, PureComponent} from 'react';
import './SplitPanel.css';

export default class SplitPanel extends PureComponent {
    static propTypes = {
        top: PropTypes.element.isRequired,
        left: PropTypes.element.isRequired,
        right: PropTypes.element.isRequired,
    };

    render() {
        const {top, left, right} = this.props;

        return (
            <div className='SplitPanel'>
                <div className="SplitPanel-Top">
                    {top}
                </div>    

                <div className='SplitPanel-Bottom'>
                    <div className="SplitPanel-Left">
                        {left}
                    </div>

                    <div className="SplitPanel-Right">
                        {right}
                    </div>
                </div>                
            </div>
        );
    }
}