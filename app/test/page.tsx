export default function TestPage() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold mb-8">JSX Test Page</h1>
      <p>This is a simple test page to verify that JSX transformation is working correctly.</p>
      <div className="mt-4 p-4 bg-primary/10 rounded-md">
        <code>
          {`
          // This is how JSX should be transformed:
          const element = React.createElement('div', null, 'Hello, world!');
          
          // Instead of:
          const element = jsx('div', null, 'Hello, world!');
          `}
        </code>
      </div>
    </div>
  )
}
