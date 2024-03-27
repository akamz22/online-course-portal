import React from 'react';

const Newsletter = () => {
    return (
        <section class="relative py-20 md:py-24 overflow-hidden">
        <div class="relative container px-4 mx-auto">
          <div class="relative max-w-3xl mx-auto px-8 pt-16 pb-18 md:pb-24 bg-white rounded-4xl overflow-hidden">
            {/* <img class="absolute top-0 left-0 w-full h-full" src="saturn-assets/images/newsletter/bg-gradient-medium.png" alt=""/> */}
            <div class="relative max-w-md mx-auto">
              <h4 class="font-heading text-center text-4xl sm:text-5xl text-gray-500 font-semibold mb-12">Sign up for our newsletter</h4>
              <div class="sm:flex mb-2 items-center">
                <input class="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="email" placeholder="pat@saturn.dev"/>
                <button class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-blue-900 rounded-md overflow-hidden" type="submit">
                  <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                  <div class="relative flex items-center justify-center">
                    <span class="mr-4">Subscribe</span>
                    <svg width="8" height="11" viewbox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </button>
              </div>
              <span class="block text-xs font-semibold text-gray-200">
                <span>We care about your data in our</span>
                <a class="inline-block underline ml-1 text-blue-200" href="#">privacy policy</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Newsletter;
