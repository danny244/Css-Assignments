# alt-school-css-assignments


<!doctype html>
<html lang="en">

<head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="stylesheet" href="./fonts/font.css" />
      <link rel="stylesheet" href="/lib/overlay/overlay.css" />
      <link rel="stylesheet" href="/lib/lib.css" />
      <link rel="stylesheet" href="./index.css" />
      <link rel="stylesheet" href="./output.css" />
      <link rel="stylesheet" href="./input.css" />

      <script src="https://cdn.tailwindcss.com"></script>

      <title>WP - Pusher</title>
</head>

<body>
      <!-- <button class="overlay-button">
            <img hidden src="../images/menu/dark.png" alt="icon">
            <img src="../images/menu/dark.png" alt="icon">
      </button> -->

      <div class="overlay">
            <div class="overlay-contents">
                  <div>
                        <section>
                              <header>
                                    <h1>ALt School CSS Assignments</h1>
                              </header>
                        </section>

                        <section>
                              <div>
                                    <a href="../otter/index.html">
                                          <div>
                                                <img src="/lib/overlay/images/otter.png" alt="otter" />
                                          </div>
                                    </a>
                              </div>

                              <div>
                                    <a href="../huckleberry/index.html">
                                          <div>
                                                <img src="/lib/overlay/images/huckleberry.png" alt="huckleberry" />
                                          </div>
                                    </a>
                              </div>
                              div>
                              <div>
                                    <a href="../watch/index.html">
                                          <div>
                                                <img src="/lib/overlay/images/watch.png" alt="watch" />
                                          </div>
                                    </a>
                              </div>
                              div>
                              <div>
                                    <a href="../individuals/index.html">
                                          <div>
                                                <img src="/lib/overlay/images/individuals.png" alt="individual" />
                                          </div>
                                    </a>
                              </div>
                        </section>
                  </div>
            </div>
      </div>

      <main>
            <div class="w-full relative">
                  <header class="w-screen fixed px-4 bg-[--background-color]">
                        <nav class="max-w-[var(--max-width)] mx-auto flex justify-between items-center py-2 h-[3.6rem]">
                              <div>
                                    <img class="w-[8rem]" src="./images/logo.png" alt="logo" />
                              </div>

                              <div>
                                    <ul class="flex items-center gap-7 font-bold list-none">
                                          <li>
                                                <a href="#">Download</a>
                                          </li>
                                          <li>
                                                <a href="#">Learn more</a>
                                          </li>
                                          <li>
                                                <a href="#">Pricing</a>
                                          </li>
                                          <li>
                                                <a href="#">Help</a>
                                          </li>

                                          <li>
                                                <button
                                                      class="outline-none border border-[var(--color)] px-2 rounded-sm p-1">
                                                      Account
                                                </button>
                                          </li>
                                    </ul>
                              </div>
                        </nav>
                  </header>

                  <section
                        class="max-w-[var(--max-width)] min-h-screen mx-auto pt-[9rem] pb-[6rem] flex flex-col justify-center items-center">
                        <div class="h-full w-full">
                              <div class="w-full h-full max-w-[var(--container-max-width)] flex items-center rounded-md overflow-hidden mx-auto">
                                    <form class="flex-1 h-fit bg-[--form-background-color]">
                                          <div class="w-full h-full">
                                                <div class="p-6 form_contents_border_bottom">
                                                      <h1 class="text-[1.5rem]">Checkout</h1>
                                                </div>
                                                <!--  -->
                                                <div class="p-7 flex flex-col gap-y-3 form_contents_border_bottom">
                                                      <div class="flex items-center gap-2">
                                                            <div
                                                                  class="w-6 h-6 rounded-full border border-[--sidebar-background-color] flex items-center justify-center">
                                                                  <span
                                                                        class="text-[0.8rem] font-medium text-[--sidebar-background-color]">1</span>
                                                            </div>

                                                            <p class="text-[0.8rem] font-[800] text-[--color]">
                                                                  Your Basic Information
                                                            </p>
                                                      </div>

                                                      <div
                                                            class="grid grid-cols-2 grid-rows-2 gap-y-3 gap-x-5 w-full basic_information_inputs">
                                                            <div class="flex flex-col gap-1">
                                                                  <label class="font-medium">First Name</label>
                                                                  <input required type="text" placeholder="Jane"
                                                                        autocomplete="given-name" autofocus />
                                                            </div>
                                                            <div class="flex flex-col gap-1 rounded-sm">
                                                                  <label class="font-medium">Last Name</label>
                                                                  <input required type="text" placeholder="Doe"
                                                                        autocomplete="family-name" />
                                                            </div>
                                                            <div class="flex flex-col gap-1 col-span-2">
                                                                  <label class="font-medium">E-mail</label>
                                                                  <input required type="email"
                                                                        placeholder="janedoe@example.com"
                                                                        autocomplete="email" />
                                                            </div>
                                                      </div>
                                                </div>

                                                <div class="p-7 flex flex-col gap-y-3 form_contents_border_bottom">
                                                      <div class="flex items-center gap-2">
                                                            <div
                                                                  class="w-6 h-6 rounded-full border border-[--sidebar-background-color] flex items-center justify-center">
                                                                  <span
                                                                        class="text-[0.8rem] font-medium text-[--sidebar-background-color]">2</span>
                                                            </div>

                                                            <p class="text-[0.8rem] font-[800] text-[--color]">
                                                                  Your Payment Information
                                                            </p>
                                                      </div>

                                                      <div class="flex w-full">
                                                            <div class="flex flex-col gap-1 w-full">
                                                                  <label class="font-medium">Credit Card</label>
                                                                  <div
                                                                        class="flex items-center w-full payment_information_inputs">
                                                                        <input required type="number"
                                                                              placeholder="Card Number"
                                                                              autocomplete="billing" class="flex-1"
                                                                              autofocus />
                                                                        <input required type="text" placeholder="MM/YY"
                                                                              class="w-[4rem]" autocomplete="billing" />
                                                                        <input required type="number" placeholder="CVC"
                                                                              autocomplete="billing" class="w-[4rem]" />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </div>
                                                <footer class="p-7 flex flex-col gap-y-4">
                                                      <button type="submit"
                                                            class="bg-[--primary-color] p-3 text-[--sidebar-color] font-bold text-[0.8rem] rounded-sm">
                                                            Buy WP Pusher
                                                      </button>

                                                      <div class="flex gap-2 items-center w-fit mx-auto">
                                                            <img src="./images/Mask.png" alt="mask">
                                                            <p class="text-[--font-size]">
                                                                  <span class="font-semibold">Need any help?</span>
                                                                  Don’t hesitate to <a href="#"
                                                                        class="underline">contact
                                                                        support!
                                                                  </a>
                                                            </p>
                                                      </div>


                                                      <img src="./images/stripe.png" alt="stripe"
                                                            class="w-[7rem] mx-auto">

                                                </footer>
                                          </div>
                                    </form>

                                    <aside class="w-[14rem] p-7 flex flex-col gap-y-6 flex-initial bg-[--sidebar-background-color] text-[--sidebar-color]">
                                          <div class="flex flex-col gap-y-1">
                                                <h2 class="font-semibold text-[1.1rem]">Freelancer</h2>
                                                <div class="flex items-end gap-1">
                                                      <div class="flex items-start gap-1">
                                                            <p class="font-medium text-[0.9rem] pt-1">$</p>
                                                            <h3 class="font-medium text-3xl">99</h3>
                                                      </div>
                                                      <p class="font-medium text-[0.8rem]">/year</p>
                                                </div>
                                                <p>Automatically renews after 1 year</p>
                                          </div>
                                          input
                                          <div class="flex flex-col gap-y-3">
                                                <div class="flex gap-3">
                                                      <img src="./images/tick.png" alt="tick" class="w-[1.2rem]">
                                                      <p>Use on 5 client sites</p>
                                                </div>

                                                <div class="flex gap-3">
                                                      <img src="./images/tick.png" alt="tick" class="w-[1.2rem]">
                                                      <p>Email support</p>
                                                </div>
                                                <div class="flex gap-3">
                                                      <img src="./images/tick.png" alt="tick" class="w-[1.2rem]">
                                                      <p>Private repositories</p>
                                                </div>
                                          </div>

                                          <div class="flex flex-col gap-y-1 pb-7 form_contents_border_bottom">
                                                <p>Need 20 client sites?</p>
                                                <a href="#" class="underline">Switch to the Agency plan.</a>
                                          </div>


                                          <div class="flex flex-col gap-y-3">
                                                <p>FTP is horrible to deal with. <span class="font-semibold">WP
                                                            Pusher</span> solves that
                                                      issue, and the customer support is awesome!</p>

                                                <div class="flex gap-2 items-center">
                                                      <img src="./images/beard.png" alt="beard"
                                                            class="rounded-full w-[2.3rem]">
                                                      <p class="font-semibold">Kirk Beard</p>
                                                </div>
                                          </div>
                                    </aside>
                              </div>
                        </div>
                        <p class="mt-6 font-medium text-[hsla(200, 6%, 41%, 1)]">© 2018 WP Pusher IVS · <span class="text-[--sidebar-background-color]">Terms of Service</span></p>
                  </section>


            </div>
      </main>

      <script defer src="/lib/overlay/overlay.js"></script>
</body>

</html>