/** @format */
import { useRouteError } from 'react-router-dom';
import { pageTransition } from '../config/animations';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <motion.div 
            style={{ 
                padding: '2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={pageTransition}
        >
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p style={{ 
                padding: '1rem',
                backgroundColor: 'var(--card-color)',
                borderRadius: '8px',
                fontSize: '0.9rem'
            }}>
                <i>{error.statusText || error.message}</i>
            </p>
            {error.stack && process.env.NODE_ENV === 'development' && (
                <pre style={{
                    textAlign: 'left',
                    overflow: 'auto',
                    padding: '1rem',
                    backgroundColor: 'var(--frame-color)',
                    borderRadius: '8px',
                    fontSize: '0.8rem'
                }}>
                    {error.stack}
                </pre>
            )}
            <button 
                onClick={() => window.location.href = '/'}
                style={{
                    padding: '0.5rem 1rem',
                    marginTop: '1rem',
                    cursor: 'pointer'
                }}
            >
                Go Back Home
            </button>
        </motion.div>
    );
};

export default ErrorPage;