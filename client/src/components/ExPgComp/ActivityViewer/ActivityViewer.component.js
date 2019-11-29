import React from 'react';
import { ActivityViewerProps } from './ActivityViewer.propTypes';
import styles from './ActivityViewer.styles.scss';

export const ActivityViewer = props => {
    return (
        <div>
            Activity Viewer component atom
        </div>
    );
};

ActivityViewer.propTypes = ActivityViewerProps.propTypes;
ActivityViewer.defaultProps = ActivityViewerProps.defaultProps;
