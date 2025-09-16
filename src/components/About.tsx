import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div
      className="
      w-full md:w-1/3 h-auto md:h-screen 
      border-r-4 border-l-4 border-black 
      flex flex-col pl-3 pr-3 md:pl-5 md:pr-5
    "
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row border-b-2 border-dashed border-black">
        {/* Left side */}
        <div className="text-center md:w-1/2 ">
          <h1 className="font-extrabold tracking-widest drop-shadow-lg text-[8vw] md:text-[2.5rem]">
            WANTED
          </h1>
          <h1 className="font-extrabold tracking-widest drop-shadow-lg text-[5vw] md:text-[1.5rem]">
            AT ANY COST
          </h1>
          <Image
            src="/images/wanted.jpg"
            alt={"wanted"}
            width={220}
            height={220}
            className="mx-auto"
          />
          <h1 className="font-extrabold text-[5vw] md:text-[1.5rem] font-serif pt-2">
            Giorgi Gogichaishvili
          </h1>
          <h1 className="font-serif font-extrabold text-[5vw] md:text-[1.5rem]">
            Software Engineer
          </h1>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 justify-center items-center flex m-3 md:m-5 text-[4vw] md:text-2xl text-center">
          <h1>
            Teams around the world look to it to complete projects faster,
            cleaner, and remarkably error-free.
          </h1>
        </div>
      </div>

      {/* Bullets */}
      <div className="space-y-4 pt-4 text-[4vw] md:text-2xl">
        <div className="flex items-start">
          <span className="text-[6vw] md:text-4xl text-black mr-3">•</span>
          <span className="font-serif">
            A digital criminal with a reputation for solving unsolved problems.
          </span>
        </div>

        <div className="flex items-start">
          <span className="text-[6vw] md:text-4xl text-black mr-3">•</span>
          <span className="font-serif">
            Known to refactor without warning and build experiences users
            actually enjoy.
          </span>
        </div>

        <div className="flex items-start">
          <span className="text-[6vw] md:text-4xl text-black mr-3">•</span>
          <span className="font-serif">Works silently, delivers loudly.</span>
        </div>

        <div className="flex items-start">
          <span className="text-[6vw] md:text-4xl text-black mr-3">•</span>
          <span className="font-serif">
            You can always count on him for something special.
          </span>
        </div>
      </div>
    </div>
  );
}

// A digital criminal with a reputation for solving unsolved problems.

// წარმოიდგინე რომ მე ვარ ძებნილი ვებ დეველოპერი. უნდა გავაკეთოთ ჩემი “wanted” პოსტერი, როგორც ძალიან საშიში და სახიფათო პრობლემების მომგვარებლის. სურათი უკვე მაქვს უბრალოდ მინდა პროგინალური ტექსტი რომ მივაწერო. ტექსტი უნდა იყოს მესამე პირში დაწერილი თითქოს გაზეთში არის განცხადება
// ChatGPT said:
// ძალიან მაგარი იდეაა! აი მაგალითი "Wanted" პოსტერის ტექსტისთვის, მესამე პირში, გაზეთის სტილში დაწერილი – თითქოს ძებნილ ვებ დეველოპერზე საგანგაშო განცხადებაა გამოქვეყნებული:
// 📰 “Tech Times” | ძებნაშია | განსაკუთრებული ყურადღება!
// თარიღი: 2025.08.14
// WANTED — სახიფათო ვებ დეველოპერი თავისუფლად დადის

// ძებნაშია ერთი განსაკუთრებული პიროვნება — კოდითა და ქაოსით შეიარაღებული. ცნობილია მხოლოდ ერთი სახელით: "[შენი სახელი ან ზედმეტსახელი]".

// 📌 ცნობილია, რომ ჰყავს მრავალწლიანი გამოცდილება საიტების არქიტექტურაში, სისტემების გატეხვაში (ფართო მნიშვნელობით), დიზაინის უკიდურესად პერფექციონისტულ აწყობაში და უკონტროლო ფუნქციონალურობაში.

// 📍 უკანასკნელად შენიშნეს ღამის 3-ზე, ტექსტურ ედიტორთან, ჭიქა ყავით და უცნაური თვალების ბრიალით — თითქოს იმ მომენტში წყვეტდა ფრონტენდის ბედს.

// 💻 ეჭვმიტანილი პასუხისმგებელია:

// კოდის რეფაქტორინგზე ისე, რომ გუნდის დანარჩენმა ვერ გაარკვია, რა შეიცვალა — მაგრამ ყველაფერი მუშაობდა უკეთ.
// ბაგების “უცნაურად სწრაფ” მოგვარებაზე.
// legacy პროექტების გადარჩენაზე მათთვის, ვისაც ყველა იმედი ჰქონდა დაკარგული.
// სასწაულებრივი სწრაფობით ჯავასკრიპტის და CSS-ის თრექინგზე — თითქოს კოდი თვითონ ელაპარაკებოდა.
// 🚫 გაფრთხილება: არ სცადოთ მისი მიბაძვა. მისი ლოგიკა არ ექვემდებარება ადამიანურ გააზრებას.
// 📩 თუ გაქვთ ინფორმაცია მისი ადგილსამყოფელის შესახებ — მიმართეთ უახლოეს ტექნიკურ მენეჯერს. შესაძლოა, მისი დაქირავება ჯერ კიდევ შესაძლებელია... გარკვეული ფასის ფარგლებში.

// თუ გინდა, შეგვიძლია ტექსტს დავუმატოთ კონკრეტული ენა (მაგ: "JavaScript-ის ოსტატი", "React-ის სტილში არალეგალურად მოქნილი" და ა.შ.) ან შენი სტილის შესაბამისი შტრიხები — UX-გიჟი, Dark Mode-only დიზაინერი, ან DevOps-ით დაინფიცირებული ფრონტენდერი.
// წარმომიდგინე, რა კონკრეტული უნარები ან ატრიბუტები გინდა გამოჩნდეს, და დავხვეწავთ ტექსტს.

// You said:
// ტექსტი უნდა იყოს ინგისურად და უფრო ლაკონურად უნდა იყის ჩამოყალიბებული. გვაქვს სამი გრაფა. About me გრაფა სადაც ვწერთ ჩემზე როგორც ძებნილზე და საშიშზე. მეორე გრაფაში ვწერთ სამუშაო გამოცდილებას და მესამე გრაფაში ვწერთ შესაძლებლობებს.
// ChatGPT said:
// მშვენიერია! შენს სტილს ვხვდები — მიდგომა ლაკონური, შინაარსი სახიფათოდ შთამბეჭდავი.
// აქ არის შენი “Wanted” პოსტერისთვის იდეალურად დაჭრილი სამი გრაფა, ინგლისურად, სერიოზული და შავი იუმორით გაჟღენთილი ტონალობით:
// 🧿 ABOUT ME
// Name: [შენი ზედმეტსახელი ან სახელი]
// Status: Highly Wanted
// A digital outlaw with a reputation for solving the unsolvable. Known to disappear for days only to return with clean code and crushed deadlines. Dangerous in the wild — especially after dark mode kicks in. Wanted for code refactoring crimes, breaking production limits, and smuggling innovation into legacy systems.
// 🛠 WORK EXPERIENCE
// Escaped multiple corporate frameworks — untouched, undefeated.
// Led full-stack raids using JavaScript, TypeScript, and React.
// Operated solo and within squads, always leaving a clean Git trail.
// Infiltrated high-security backend systems using Node.js & REST/GraphQL.
// Left multiple employers stunned with sudden performance boosts.
// ⚡ SKILLS & ABILITIES
// Code refactoring under extreme pressure
// UI/UX design precision that borders on obsession
// Builds that don’t break — even on Mondays
// Speaks fluent API, HTML/CSS, and sarcasm
// Debugs with clinical accuracy
// Can disappear into a terminal for hours — and return with miracles
// თუ გინდა, ტექსტს დავამატოთ კონკრეტული ტექნოლოგიები ან პერსონალურ სტილზე მოვახდინოთ მორგება — უბრალოდ მითხარი. Ready when you are, outlaw. 🤘💻
// You said:
// კი უნდა ჩანდეს რომ ვიცი C, js, react, nextjs, css, tailwind, typescript,
// ChatGPT said:
// სუპერ — ეს მეხმარება ტექსტის უფრო პიროვნულად ჩამოყალიბებაში და შენი უნარების ხაზგასმაში.
// აი განახლებული და დაბალანსებული “Wanted” პოსტერის ტექსტი შენს ტექნოლოგიურ კომპეტენციებზე მორგებული სტილით:
// 🧿 ABOUT ME
// Name: [შენი ზედმეტსახელი ან კოდური სახელი]
// Status: Highly Wanted
// Code renegade. Frontend whisperer. System manipulator.
// Sought by teams worldwide for leaving projects faster, cleaner, and eerily bug-free. Operates mostly at night, often fueled by caffeine and dangerous levels of perfectionism. Known to refactor without warning and build experiences users actually enjoy. Approach with caution — and a decent spec sheet.
// 🛠 WORK EXPERIENCE
// Orchestrated full-stack operations with JavaScript, TypeScript, and React
// Ghosted through Next.js projects — fast, server-ready, and SEO-lethal
// Reinforced interfaces with handcrafted CSS and precision Tailwind strike
// Injected order into chaos using strong C foundations and clean logic
// Rewrote legacy nightmares into scalable dreams — under deadline
// Operated across teams, tools, and timezones — always mission-complete
// ⚡ SKILLS & ABILITIES
// Expert in C, JavaScript, TypeScript, React, Next.js, CSS, Tailwind
// Surgical-level debugging and optimization
// Clean architecture, pixel-perfect layouts, and atomic components
// Can turn any figma into functioning reality
// Navigates legacy code like a maze — and always finds the exit
// Performance freak: cuts load times like a blade
// Works silently, delivers loudly
// თუ გინდა, დავამატოთ ენა (ქართულად ან ინგლისურად პროექტებზე მუშაობის გამოცდილება), freelance/agency background, ან რაიმე განსაკუთრებული ხაზგასასმელი მახასიათებელი — შეგვიძლია ეგეც ჩავაშენოთ.
// გინდა სახელი/ზედმეტსახელი მივაწერო თუ ეგ შენით დაამატებ პოსტერზე?

// You said:
// ქართულადაც მომწერე იგივე ტექსტი. სავარაუდოდ ენის შეცვლის ფუნქციონალს დავამატებ
// ChatGPT said:
// ძალიან მაგარია — ენის გადართვის ფუნქციონალი ბონუსია ასეთი პოსტერისთვის.
// აქ არის ზუსტად იგივე ტექსტის ქართული ვერსია, შენს უნარებზე მორგებული სტილით, იმავე ლაკონურ და "საშიშად პროფესიონალურ" ტონალობაში:
// 🧿 ჩემ შესახებ
// სახელი: [შენი ზედმეტსახელი ან კოდური სახელი]
// სტატუსი: ძებნაშია — განსაკუთრებული კოდი დამალულია
// კოდის გარეშე არ არსებობს. ფრონტენდის მოლაპარაკე. სისტემების ჩუმად მენიპულატორი.
// ძებნაშია სხვადასხვა გუნდის მიერ — ყოველთვის ტოვებს პროექტებს სწრაფად, სუფთად და გაუგებრად უშეცდომოდ. მუშაობს უმეტესად ღამით, კოფეინზე და პერფექციონიზმის საშიშ ზღვარზე. ახასიათებს უეცარი რეფაქტორინგი და ისეთი გამოცდილებების შექმნა, რომლებიც მომხმარებელს მართლა ახარებს. ფრთხილად მიუახლოვდით — ტექნიკური დავალებით და ჩაწერილი ვერსიით.
// 🛠 სამუშაო გამოცდილება
// სრული სტეკის ოპერაციები JavaScript, TypeScript და React ტექნოლოგიებით
// საიდუმლოდ შეპარული Next.js პროექტებში — სწრაფად, სერვერზე მზად და SEO-სთვის მომაკვდინებლად
// ინტერფეისები გაძლიერებული ხელით დაწერილი CSS-ით და ზუსტი Tailwind დარტყმით
// სტაბილური ლოგიკა და წესრიგი — C ენაზე დაფუძნებული კოდის მეშვეობით
// გადაუწერია ძველი კოშმარები ახალ, მასშტაბურ არქიტექტურად — ვადებში დარჩენილი
// გუნდებს შორის, ტექნოლოგიებს შორის და დროის სარტყელებშიც კი — ყოველთვის წარმატებით
// ⚡ უნარები და შესაძლებლობები
// ექსპერტი: C, JavaScript, TypeScript, React, Next.js, CSS, Tailwind
// ბაგების და პერფორმანსის დიაგნოსტიკა ქირურგიული სიზუსტით
// სუფთა არქიტექტურა, პიქსელ-სწორი დიზაინი და ატომური კომპონენტები
// ნებისმიერ Figma-ს აქცევს კოდად — რეალურად
// ლეგაცი კოდში მოძრაობს როგორც ლაბირინთში — და ყოველთვის პოულობს გამოსავალს
// პერფორმანსზე შეპყრობილი: ამცირებს ჩატვირთვის დროს უკომპრომისოდ
// მუშაობს ჩუმად — შედეგები ხმაურიანია
// თუ გინდა, დავამატო ლოკალიზაციის მხარდაჭერის ან მულტილინგვალურ პროექტებზე მუშაობის გამოცდილებაც — ეგეც მარტივად ჩავსვამ.
// შეგიძლია თავად ჩასვა შესაბამისი სახელები — ან მითხარი და მოვამზადებ კონკრეტული ვერსიით.
// 🛠 გინდა ამ ყველაფერს JSON ფორმატიც მოგცე ენის გადართვისთვის
