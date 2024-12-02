export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us when using the Zeal app,
          including but not limited to:
        </p>
        <ul>
          <li>Account information (name, email, congregation)</li>
          <li>Usage data and preferences</li>
          <li>Communication data</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve the Zeal app,
          including:
        </p>
        <ul>
          <li>Providing the core functionality of the app</li>
          <li>Sending notifications about assignments and duties</li>
          <li>Improving and personalizing the user experience</li>
        </ul>

        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

