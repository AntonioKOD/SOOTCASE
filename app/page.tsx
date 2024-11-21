'use client';
import Image from 'next/image';
import SOOT from '../public/sootcase.jpg'

export default function Home() {
  const cryptoAddress = 'Ee2bpojj87Sx5T1oP6YYF8FhG7XbUFzdWHM554FHpump';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cryptoAddress);
    alert('Crypto address copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-green-500 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Sootcase (SOOT)</h1>
          <p className="mt-2">The meme-inspired cryptocurrency that's all about fun and community.</p>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">About Sootcase</h2>
          <p className="mb-6">
            Sootcase is a community-driven cryptocurrency inspired by the viral meme of a young Barron Trump exclaiming, "I like my suitcase." Embracing the spirit of this meme, Sootcase blends humor, community, and philanthropy within the crypto space.
          </p>
          <Image
            src={SOOT} // Ensure this image is placed in the public directory
            alt="Sootcase Coin"
            width={200}
            height={200}
            className="mx-auto"
          />
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contract Address</h2>
          <p className="mb-4">{cryptoAddress}</p>
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Copy Address
          </button>
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">How to Buy</h2>
          <ol className="list-decimal list-inside text-left inline-block">
            <li className="mb-2">
              <strong>Create a Wallet:</strong> Download Phantom or your preferred wallet from the App Store or Google Play for free. Desktop users can download the Chrome extension from Phantom.
            </li>
            <li className="mb-2">
              <strong>Get Some SOL:</strong> Ensure you have SOL in your wallet to swap for $SOOT. You can buy SOL directly on Phantom, transfer from another wallet, or purchase on an exchange and send it to your wallet.
            </li>
            <li className="mb-2">
              <strong>Go to Jupiter:</strong> Connect your wallet to Jupiter, paste the $SOOT token address, select trade, and confirm. When prompted by Phantom, sign the transaction.
            </li>
            <li>
              <strong>Swap for Sootcase:</strong> Swap SOL for $SOOT. With zero taxes, you don't need to worry about specific slippage. If you don't have any SOL, you can buy directly on Phantom.
            </li>
          </ol>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          &copy; 2024 Sootcase. Built with memes and good vibes.
        </div>
      </footer>
    </div>
  );
}