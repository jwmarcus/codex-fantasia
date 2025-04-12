import LaunchIcon from '@mui/icons-material/Launch'; // Icon for external links
import { Card, CardContent, Chip, Link, Typography } from '@mui/material';
import { ResourceLink } from 'models/ResourceLink'; // Import the model using path relative to baseUrl
import React from 'react';

interface ResourceCardProps {
    resource: ResourceLink;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
    return (
        <Card sx={{ height: '100%' }}> {/* Ensure consistent height if needed in a grid */}
            <CardContent>
                {/* Resource Type Chip */}
                <Chip label={resource.type} size="small" color="secondary" sx={{ mb: 1, textTransform: 'capitalize' }} />

                {/* Resource Title - Link to External URL */}
                <Typography variant="h6" component="div" gutterBottom>
                    <Link
                        href={resource.url}
                        target="_blank" // Open in new tab
                        rel="noopener noreferrer" // Security best practice
                        underline="hover"
                        sx={{ display: 'inline-flex', alignItems: 'center' }}
                    >
                        {resource.title}
                        <LaunchIcon sx={{ fontSize: '1rem', ml: 0.5 }} /> {/* Add external link icon */}
                    </Link>
                </Typography>

                {/* Optional: Display Source */}
                {resource.source && (
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                        Source: {resource.source}
                    </Typography>
                )}

                {/* Resource Description */}
                {resource.description && (
                    <Typography variant="body2" color="text.secondary">
                        {resource.description}
                    </Typography>
                )}

                {/* Add other elements like ratings or verification date later */}
            </CardContent>
        </Card>
    );
};

export default ResourceCard;
