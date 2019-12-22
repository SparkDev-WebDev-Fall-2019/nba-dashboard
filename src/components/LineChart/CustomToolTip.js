// CustomTooltipContent.js
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

const CustomTooltipContent = (props) => {
    // payload[0] doesn't exist when tooltip isn't visible
    if (props.payload[0] != null) {
        // mutating props directly is against react's conventions
        // so we create a new payload with the name and value fields set to what we want
        const newPayload = [
            {
                name: 'Name',
                // all your data which created the tooltip is located in the .payload property
                value: props.payload[0].payload.name,
                // you can also add "unit" here if you need it
            },
            ...props.payload,
        ];

        // we render the default, but with our overridden payload
        return <DefaultTooltipContent {...props} payload={newPayload} />;
    }

    // we just render the default
    return <DefaultTooltipContent {...props} />;
};

export default CustomTooltipContent;
