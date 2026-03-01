import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const CompanyCard = ({ name, industry, description, link }) => {
  return (
    <Card className="h-100 shadow-sm border-0" style={{ borderTop: '4px solid #cc0000' }}>
      <Card.Body className="d-flex flex-column">
        {/* Placeholder for Logo */}
        <div 
          className="bg-light d-flex align-items-center justify-content-center mb-3" 
          style={{ height: '120px', borderRadius: '8px', border: '1px dashed #dee2e6' }}
        >
          <span className="text-muted">Logo Placeholder</span>
        </div>

        <Badge bg="danger" className="mb-2 align-self-start text-uppercase" style={{ fontSize: '0.7rem' }}>
          {industry || 'Industry'}
        </Badge>
        
        <Card.Title className="fw-bold">{name || 'Company Name'}</Card.Title>
        
        <Card.Text className="text-muted small flex-grow-1">
          {description || 'Short description of the company services and mission goes here.'}
        </Card.Text>

        <Button 
          variant="outline-danger" 
          size="sm" 
          className="mt-3 fw-bold"
          href={link || '#'}
        >
          Visit Website
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;