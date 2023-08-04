import React from "react";

export default function useHasMouted() {
    const [hasMouted, setHasMouted] = React.useState(false);

    React.useEffect(() => {
        setHasMouted(true)
    }, [])

    return hasMouted
}