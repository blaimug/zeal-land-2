export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Zeal app, you accept and agree to be bound by the terms
          and provision of this agreement.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of Zeal for personal,
          non-commercial use only. This is the grant of a license, not a transfer of title.
        </p>

        <h2>3. Disclaimer</h2>
        <p>
          The materials on Zeal are provided on an 'as is' basis. Zeal makes no warranties,
          expressed or implied, and hereby disclaims and negates all other warranties
          including, without limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual property or
          other violation of rights.
        </p>

        {/* Add more sections as needed */}
      </div>
    </div>
  )
}

