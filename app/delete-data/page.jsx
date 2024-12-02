export default function DeleteData() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8">Delete User Data</h1>
      <div className="prose max-w-none">
        <p>
          We respect your privacy and your right to control your personal data. You can
          request the deletion of your user data at any time.
        </p>

        <h2>How to Delete Your Data</h2>
        <p>There are two ways to delete your data:</p>
        
        <h3>1. Through the App</h3>
        <ol>
          <li>Open the Zeal app</li>
          <li>Go to Settings</li>
          <li>Select "Delete Account"</li>
          <li>Follow the confirmation steps</li>
        </ol>

        <h3>2. Contact Us</h3>
        <p>
          If you prefer, you can contact our support team to request the deletion of your
          data. Please use the contact form on our website or email us at
          support@zealapp.com.
        </p>

        <h2>What Data Will Be Deleted</h2>
        <ul>
          <li>Account information</li>
          <li>Personal preferences</li>
          <li>Usage history</li>
          <li>All stored content</li>
        </ul>

        <p className="text-gray-600 mt-8">
          Note: This process cannot be undone. Once your data is deleted, it cannot be
          recovered.
        </p>
      </div>
    </div>
  )
}

