import React from "react";
import img1 from '../images/1.svg';
import img2 from '../images/2.svg';
import img3 from '../images/3.svg';
import img4 from '../images/4.svg';
import FeatureBox from "./FeatureBox";

export default function Features() {
    return (
        <div id="features">
            <h1>FEATURES</h1>
            <div className="a-container">
                <FeatureBox image={img1} title="WeightLifting"/>
                <FeatureBox image={img2} title="Specific Muscle"/>
                <FeatureBox image={img3} title="Flex Your Muscle"/>
                <FeatureBox image={img4} title="Cardio Exercise"/>
            </div>
        </div>
    );
}