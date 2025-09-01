const Message = ({ variant, children }) => {
  const styles = {
    success: { backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb' },
    error: { backgroundColor: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb' },
    warning: { backgroundColor: '#fff3cd', color: '#856404', border: '1px solid #ffeaa7' },
    info: { backgroundColor: '#d1ecf1', color: '#0c5460', border: '1px solid #bee5eb' }
  };

  return (
    <div style={{
      padding: '1rem',
      margin: '1rem 0',
      borderRadius: '5px',
      ...styles[variant] || styles.info
    }}>
      {children}
    </div>
  );
};

export default Message;