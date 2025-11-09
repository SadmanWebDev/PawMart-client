� Pet Adoption & Supply Portal — “PawMart”

�� Project Theme
PawMart is a community-driven platform where pet owners, breeders, and shops can list pets
for adoption or sell pet-related products (food, toys, accessories, etc.). Buyers and adopters can
browse, contact, and order directly.

Key Rules:
● GitHub Commits:
○ Include a minimum of 15 notable GitHub commits on the client side.
○ Include a minimum of 8 notable GitHub commits on the server side
● Readme.md: Add a meaningful readme.md file with the name of your website
and a live site URL on client side. Include a minimum of five bullet points to
feature your website.
● Lorem Text: Don’t use any Lorem ipsum text; you can not use the default alert to
show any error or success message.
● Host your Application: You can choose deployment systems like Netlify,
Surge, and Firebase for client-side hosting and Vercel for server-side hosting. As
you develop a single-page application
○ Ensure that the page doesn&#39;t throw any error on reloading from any
routes.
○ Add your domain for authorization to Firebase if you use Netlify / surge
○ Logged in User must not be redirected to Login on reloading any private route

�� Layout Structure

Navbar
Before Login:
● Left: Logo + Website Name
● Middle: Home | Pets &amp; Supplies
● Right: Login | Register
After Login:
● Left: Logo + Website Name
● Middle: Home | Pets &amp; Supplies | Add Listing | My Listings | My Orders
● Right: Profile Avatar | Logout

Main Section
Dynamic routing with React Router — content changes based on route navigation.

Footer
Include:
● Logo / Site Name
● Short Description: “PawMart connects local pet owners and buyers for adoption and pet
care products.”
● Copyright
● Useful Links (Home, Contact, Terms)

Keep the Navbar and Footer on all pages except 404 Page.
(মানে 404 Page এ navbar এবং footer থাকবেনা )

�� Pages &amp; Functionalities

�� Home Page (Public)
1️⃣ Banner Section
● Carousel or slider with 3+ meaningful images (pets, adoptions, happy owners)
● Taglines like:
○ “Find Your Furry Friend Today!”
○ “Adopt, Don’t Shop — Give a Pet a Home.”
○ “Because Every Pet Deserves Love and Care.”

2️⃣ Category Section
Display 4 category cards:
● �� Pets (Adoption)
● �� Pet Food
● �� Accessories
● �� Pet Care Products

Each card navigates to the filtered product list page for that category.
Route example: “/category-filtered-product/:categoryName”
This route will contain all available filtered listings/products in a 3-column grid layout.

3️⃣ Recent Listings
Show latest 6 listings from MongoDB (.limit(6)):
Each card includes:
● Image
● Name
● Category
● Price (or “Free for Adoption”)
● Location
● “See Details” button → navigates to Product/Listing Details page

4️⃣ Extra Sections (Add 2 Meaningful Ones)

● � “Why Adopt from PawMart?” — a short awareness section about rescuing and
adopting pets instead of buying.
● � “Meet Our Pet Heroes” — show 3-4 profiles of adopters or pet caregivers (static or
from DB).

� Authentication
Use Firebase Authentication for login/register (Email-Password + Google Login).
Login Page
Fields:
● Email input
● Password input
● Login button
● Google Login button
● “Don’t have an account? Register here”
Register Page
Fields:
● Name input
● Email input
● Password input
● photoURL input
● Register button
● Google Login button
● “Already have an account? Login here”
Password validation:
● At least 1 uppercase letter
● At least 1 lowercase letter
● Minimum 6 characters
Use react-hot-toast or SweetAlert for success/error notifications.
⚠️ Skip email verification/forgot password for simplicity.

� Add Listing Page (Private Route)
Pet owners or shop owners can add new listings (adoption or product).
Form Fields:
● Product/Pet Name
● Category (Dropdown: Pets, Food, Accessories, Care Products)
● Price (0 if pet is selected)
● Location
● Description
● Image (URL)
● Date (Pick Up)
● Email = current user email (readonly)

After submission:
● Save listing to MongoDB
● Show success toast

�� Pets &amp; Supplies Page (Public)
Displays all available listings in a 3-column grid layout.
Each listing card shows:
● Image
● Name
● Category
● Location
● Price
● “See Details” button → Product Details Page

Add filters/search:
● Filter by category

�� Listing Details Page (Private)

Shows full details of the selected listing:
● Name
● Category
● Owner’s Email
● Description
● Price
● Location
● Image

Button:
� “Adopt / Order Now”
Clicking on this button an Order Modal will open.

Order Form Fields
● Buyer Name (readonly auto from user)
● Email (readonly auto from user)
● Product/Listing ID (readonly auto fill)
● Product/Listing Name (readonly auto fill)
● Quantity (if category is pet, then quantity will be 1)
● Price (readonly auto fill)
● Address
● Date (pick up)
● Phone
● Additional Notes
After submission:
● Save order info to MongoDB
● Show success toast

� My Listings Page (Private)
Shows only listings created by the logged-in user (their pets or products).
Features:

● Show the information in a tabular form
● Update Button: Edit details in the modal/new update route.
● Delete Button: Confirm before deleting.
● Only user’s own listings are shown.

� My Orders Page (Private)
Displays all adoption requests or supply orders by the logged-in user.
Each record includes:
● Product/Listing Name
● Buyer Name
● Price
● Quantity
● Address
● Date
● Phone
Information will be in a tabular form
Feature:
�� “Download Report” buttonLook at Challenge Part)
● Export the table as a PDF (use jsPDF + jsPDF-AutoTable)
● Includes only logged-in users’ orders

� Additional Features
✅ Dynamic page title per route
✅ 404 “Page Not Found”
✅ Loading Spinner during API calls
✅ Toasts for all CRUD operations
✅ Fully responsive (mobile-first)

UI Design Requirements:
● Unique Design: First, decide what kind of website you want to make. Then,
search online or check out websites like ThemeForest to get ideas for the design.
But remember, your website idea shouldn&#39;t be similar to any projects you&#39;ve done
before or to any examples in our modules or conceptual sessions.
★ You can also look for free resources on blogs to help with your website.

1. Keep the main heading style (font, size, color) consistent across all sections.
2. Keep paragraph spacing balanced and text easily readable.
3. Maintain uniform image sizes and spacing.
4. Use the same button style as on the home page.
5. Ensure good spacing and proper alignment.
6. Navbar, Keep the heading/logo same style and size as on the home page.
7. Use a grid layout with equal image sizes.
8. Keep all cards equal height and width (especially in services, projects, or
   products section)
9. Use the new X logo instead of the old Twitter bird to match the latest rebrand
10. Responsiveness: Make it responsive for all devices, including mobile, tablet, and
    desktop views.
    Resources:
    ● https://uiverse.io/
    ● https://devmeetsdevs.com/
    ● https://bootcamp.uxdesign.cc/free-images-and-resources-collection-for-website-
    c77f2fc46ce5
    ●
    https://themeforest.net/?srsltid=AfmBOopTj6PNz51iuV2YJXUtBP8nt19_zT5LG2
    dToAjIHQqzNCzregn0
    ●
    https://codecanyon.net/?srsltid=AfmBOooRoUfeK7lOROpchCuA4hPVj5P9WRmt
    DQJ9K0E6Yhf4VTrHhXKt

� Bonus (Challenge) Features

1. Download Report: Generate PDF of all orders by the logged-in user.

2. Dark/Light Mode Toggle using Tailwind.
3. Search by name on the Pets &amp; Supplies Page
4. Add Animations using any two of:
   ○ React Simple Typewriter
   ○ Framer motion
   ○ React Tooltip

� Database Structure (MongoDB)
1️⃣ Collection: listings
{
&quot;name&quot;: &quot;Golden Retriever Puppy&quot;,
&quot;category&quot;: &quot;Pets&quot;,
&quot;Price&quot;: 0
&quot;location&quot;: &quot;Dhaka&quot;,
&quot;description&quot;: &quot;Friendly 2-month-old puppy available for adoption.&quot;,
&quot;image&quot;: &quot;https://example.com/golden.jpg&quot;,
&quot;email&quot;: &quot;owner@gmail.com&quot;,
&quot;date&quot;: &quot;2025-10-27&quot;
}
2️⃣ Collection: orders
{
&quot;productId&quot;: &quot;65488adsfadf5454f&quot;,
&quot;productName&quot;: &quot;Golden Retriever Puppy&quot;,
&quot;buyerName&quot;: &quot;Mr. X&quot;,
&quot;email&quot;: &quot;buyer@gmail.com&quot;,
&quot;quantity&quot;: 1,
&quot;price&quot;: 0,
&quot;address&quot;: &quot;Chattogram&quot;,
&quot;phone&quot;: &quot;017xxxxxxx&quot;,
&quot;date&quot;: &quot;2025-10-27&quot;
&quot;additionalNotes&quot;: &quot;Some Text&quot;
}

Optional (Advanced)(এগুলো অপশনাল মার্কিং হবে না কিন্তু করতে
পারলে আপনার জন্য ভালো )

Firebase Admin SDK Authorization (Server-Side)
● Use Firebase Admin SDK to verify user tokens for protected API routes.
● Only allow updates/deletes if the logged-in user matches the listing owner.
● Initialize Admin SDK with service account in .env.
What to Submit
✅ Client-side GitHub Repository
✅ Server-side GitHub Repository
✅ Live Website Link Client-side
✅ Live Website Link Server-side
