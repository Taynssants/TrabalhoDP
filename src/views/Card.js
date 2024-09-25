import React from 'react';
import { Card as BootstrapCard, Button } from 'react-bootstrap';

const Card = ({ title, description, image, onButtonClick, buttonText }) => {
    return (
        <BootstrapCard style={{ width: '18rem' }}>
            {image && <BootstrapCard.Img variant="top" src={image} />}
            <BootstrapCard.Body>
                <BootstrapCard.Title>{title}</BootstrapCard.Title>
                <BootstrapCard.Text>
                    {description}
                </BootstrapCard.Text>
                {onButtonClick && (
                    <Button variant="primary" onClick={onButtonClick}>
                        {buttonText || 'Ação'}
                    </Button>
                )}
            </BootstrapCard.Body>
        </BootstrapCard>
    );
};

export default Card;