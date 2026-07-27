"use client";
import Seo from "../../components/seo/Seo";
import "./deleteaccount.scss";

const DeleteAccount = () => {
  return (
    <>
      <Seo
        title="Delete Your Account - PMU Forms"
        description="Instructions for requesting deletion of your PMU Forms account and associated data."
        keywords="delete account, data deletion, PMU Forms"
        canonical="https://pmuforms.com/delete-account"
        ogTitle="Delete Your Account - PMU Forms"
        ogDescription="How to request deletion of your PMU Forms account and data"
        ogUrl="https://pmuforms.com/delete-account"
        robots="index, follow"
      />
      <div className="delete-account">
        <h1>Delete Your PMU Forms Account</h1>
        <p>
          PMU Forms is developed by Dephyned. This page explains how to
          request deletion of your account and the data associated with it.
        </p>

        <h2>How to Request Deletion</h2>
        <p>
          Email <a href="mailto:contact@pmuforms.com">contact@pmuforms.com</a>{" "}
          from the email address associated with your account, with the
          subject line "Account Deletion Request." Please include your
          account email and business name. We will process your request
          within 30 days and confirm by email once it is complete.
        </p>

        <h2>What Gets Deleted</h2>
        <ul>
          <li>Your login credentials and profile information</li>
          <li>Your business and personal contact details</li>
          <li>App preferences and device push notification tokens</li>
        </ul>

        <h2>What May Be Retained, and Why</h2>
        <ul>
          <li>
            Client records (names, consent forms, health-related intake
            responses, signatures, and photos) submitted through your account
            may be retained for a period after deletion in line with
            applicable record-keeping requirements for licensed body art and
            permanent makeup practitioners in your jurisdiction.
          </li>
          <li>
            Payment and transaction records processed via Stripe are retained
            as required by financial regulations and tax law.
          </li>
          <li>
            Anonymized or aggregated data that cannot be linked back to you
            may be retained indefinitely.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          Questions about this process can be sent to{" "}
          <a href="mailto:contact@pmuforms.com">contact@pmuforms.com</a>.
        </p>
      </div>
    </>
  );
};

export default DeleteAccount;
