import Navbar from "@/components/Navbar";

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Return Policy Section - Vertically Centered */}
      <section className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h1 className="text-3xl font-bold mb-8 text-center text-black">Return Policy</h1>
          
          <div className="space-y-6 text-gray-800">
            <p className="text-lg">
              All purchases made through this website redirect to Amazon. As such, all returns and refunds are handled according to Amazon's return policy.
            </p>
            
            <p className="text-lg">
              You can read Amazon's policy here:{" "}
              <a 
                href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GKM69DUUYKQWKWX7"
                className="text-black font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon Return Policy
              </a>
            </p>
            
            <p className="text-lg">
              If you have any questions, feel free to contact us at{" "}
              <a 
                href="mailto:therealgous@gmail.com"
                className="text-black font-semibold hover:underline"
              >
                therealgous@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicy;
