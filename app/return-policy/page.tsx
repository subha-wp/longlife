import React from "react";

const ReturnPolicyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Return Policy</h1>
        <p className="text-gray-600 mb-6">
          Thank you for purchasing our Lithium Batteries. At LongLife, we aim to
          provide you with the highest-quality products. Please read our return
          policy carefully before proceeding with a return request.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          Eligibility for Returns
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>
            Returns are only accepted for products with manufacturing defects or
            quality issues.
          </li>
          <li>
            We do not accept returns for products damaged during transit. Please
            inspect the product upon delivery and report any transit damage to
            the courier service immediately.
          </li>
          <li>
            All returns are subject to verification by our team before approval.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          Return Process
        </h2>
        <ol className="list-decimal list-inside text-gray-600 mb-6">
          <li>
            Contact our support team within 7 days of receiving the product to
            initiate a return request.
          </li>
          <li>
            Provide proof of the manufacturing defect or quality issue, such as
            photographs or a detailed description.
          </li>
          <li>
            Our team will review your request and guide you through the next
            steps if the return is approved.
          </li>
        </ol>

        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          Important Notes
        </h2>
        <p className="text-gray-600 mb-6">
          Returns will only be processed after verification of the issue. Any
          unauthorized returns or returns without verification will not be
          accepted.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mb-3">Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions regarding our return policy, feel free to
          contact our support team at{" "}
          <a
            href="mailto:support@longlife.vercel.app"
            className="text-blue-600 underline"
          >
            support@longlife.vercel.app
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;

export const metadata = {
  title: "Return Policy - LongLife",
  description:
    "Read the return policy for LongLife lithium batteries to understand eligibility and process.",
};
