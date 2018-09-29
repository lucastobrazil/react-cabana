import React, { Fragment } from 'react';
import Box from '../Box';
import ProgressBar from '.';
const Slider = ({ onChange, amount }) => (
    <Fragment>
        <input type="range" style={{ width: '100%' }} step="1" value={amount} onChange={onChange} list="tickmarks" />
        <datalist id="tickmarks">
            <option value="0" />
            <option value="10" />
            <option value="20" />
            <option value="30" />
            <option value="40" />
            <option value="50" />
            <option value="60" />
            <option value="70" />
            <option value="80" />
            <option value="90" />
            <option value="100" />
        </datalist>
    </Fragment>
);
class StatefulExample extends React.Component {
    constructor() {
        super();
        this.state = {
            amount: 20,
        };
    }

    onChange(event) {
        this.setState({ amount: parseInt(event.target.value, 10) });
    }

    render() {
        const { amount } = this.state;
        const { innerBg, outerBg, borderRadius, p, fontSize, showNumber } = this.props;
        return (
            <Box mt={3}>
                <Slider onChange={this.onChange.bind(this)} amount={amount} />
                <ProgressBar
                    p={p}
                    innerBg={innerBg}
                    outerBg={outerBg}
                    amount={amount}
                    borderRadius={borderRadius}
                    fontSize={fontSize}
                    showNumber={showNumber}
                />
            </Box>
        );
    }
}

export default function ProgressBarDocs() {
    return (
        <Box width={1 / 4}>
            <StatefulExample innerBg="primary" />
            <StatefulExample innerBg="tertiary" borderRadius="large" />
            <StatefulExample innerBg="primary" p="4px" borderRadius="large" />
            <StatefulExample innerBg="primary" p={1} borderRadius="none" />
            <StatefulExample innerBg="primary" fontSize="hero" />
            <StatefulExample innerBg="primary" fontSize="hero" showNumber={false} />
        </Box>
    );
}
