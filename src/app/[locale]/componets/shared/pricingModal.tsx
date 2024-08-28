import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface PricingPlan {
  name: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Freelancer",
    description: "The essentials to provide your best work for clients.",
    price: 24,
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time"
    ]
  },
  {
    name: "Startup",
    description: "A plan that scales with your rapidly growing business.",
    price: 32,
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    description: "Dedicated support and infrastructure for your company.",
    price: 48,
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations"
    ]
  }
];

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl sm:p-6">
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-100">
                    Choose Your Plan
                  </Dialog.Title>
                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                      <div key={plan.name} className="relative rounded-lg border p-6 shadow-sm bg-gray-700 flex flex-col justify-between h-full">
                        {plan.isPopular && (
                          <p className="absolute top-0 right-6 -translate-y-1/2 transform rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold text-white">
                            Most popular
                          </p>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold leading-8 text-gray-100">{plan.name}</h3>
                          <p className="mt-4 text-sm leading-6 text-gray-300">{plan.description}</p>
                          <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-gray-100">${plan.price}</span>
                            <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
                          </p>
                          <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                            {plan.features.map((feature) => (
                              <li key={feature} className="flex gap-x-3">
                                <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          type="button"
                          className={`mt-8 w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${
                            plan.isPopular ? 'bg-indigo-500 text-white' : 'bg-gray-600 text-white hover:bg-gray-500'
                          }`}
                        >
                          Buy plan
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PricingModal;