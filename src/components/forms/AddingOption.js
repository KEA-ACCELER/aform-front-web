import React from "react";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

function AddingOption(props) {
    return (
        <ButtonGroup aria-label="Basic example" className="AddingOption">
            <Button
                variant="outline-primary"
                onClick={(event) => {
                    props.addQuestion("RADIO");
                }}
            >
                Radio
            </Button>
            <Button
                variant="outline-primary"
                onClick={(event) => {
                    props.addQuestion("CHECKBOX");
                }}
            >
                CheckBox
            </Button>
            <Button
                variant="outline-primary"
                onClick={(event) => {
                    props.addQuestion("SHORTFORM");
                }}
            >
                Shortform
            </Button>
        </ButtonGroup>
    );
}

export default React.memo(AddingOption);
