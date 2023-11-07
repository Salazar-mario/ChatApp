import { XMarkIcon } from "@heroicons/react/24/solid"
import React, { useState } from "react"

const StandardMessageForm = () => {
    const [message, setMesage] = useState("");
    const [attachment, setAttachment] = useState("");
    const [preview, setPreview] = useState("");
    const handleChange = (e) => setMesage(e.target.value)

    return (
        <div className="message-form-container">
            {preview && (
                <div className="message-form-preview">
                    <img
                        alt="message-form-preview"
                        className="message-form-preview-image"
                        src={preview}
                        onLoad={() => URL.revokeObjectURL(preview)}
                    />
                    <XMarkIcon
                        className="message-form-icon-x"
                        onClick={() => {
                            setPreview("");
                            setAttachment("");
                        }}
                    />
                </div>
            )};
        </div>
    );
};

export default StandardMessageForm;
