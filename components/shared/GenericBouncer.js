import React, {Component} from "react";
import {
    Animated
} from "react-native";

class GenericBouncer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // Start large
        Animated.spring(                          // Base: spring, decay, timing
        this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 1,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // Start the animation
    }

    render(){
        return (
                <Animated.View style={{
                    ...this.props.style,
                    transform: [{scale: this.state.bounceValue }]
                }}>
                    {this.props.children}
                </Animated.View>
        )
    }
}

export default GenericBouncer;
