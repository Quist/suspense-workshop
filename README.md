# React Workshop: Avanserte Teknikker med React Query og Suspense 🚀

**_NOTE:_**  Deler av denne read'n er AI-generert 🤖

Hei 👋 Velkommen til en spennende workshop hvor vi dykker dypere inn i de avanserte teknikkene React har å by på. I denne sesjonen skal vi utforske kraften av `react-query` sammen med spennende bruksområder av Suspense. Gjør deg klar for en hands-on opplevelse der vi sammen utforsker, lærer, og ikke minst har det gøy! 🎉

## Forutsetninger 📚

Denne workshoppen er designet for viderekommende React-utviklere som allerede har god kjennskap til grunnleggende React-konsepter. Du bør være komfortabel med å bruke hooks som `useState`, `useEffect`, og ikke være redd for å eksperimentere med nyere funksjoner. 💪

## Oppsett 🛠️

Sørg for at du har den nyeste versjonen av [Node.js](https://nodejs.org/) installert på din maskin før du starter.

1. Klon dette repositoriet eller last ned prosjektfilene.
2. Åpne terminalen og naviger til prosjektets rotmappe.
3. Kjør `npm install` for å installere nødvendige avhengigheter.
4. Start utviklingsserveren med `npm start`.

## Oppgaver ✍️
BekkBank lanserer en ny storsatsning, BekkBank, men trenger din hjelp for å komme i mål.

### Oppgave 1 (AccountsPage)
Ta i bruk Suspense i `AccountsPage.tsx` ved å endre `useQuery` til `useSuspenseQuery`. Klarer du deg uten if-setninger? 

Implementer en loading-komponent, gjerne ved bruk av [Chakra Spinner](https://chakra-ui.com/docs/components/spinner). 

### Oppgave 2 (AccountsPage) 
Utvide til å håndtere feil også (Error Boundary). For å enkelt komme i gang kan du installere denne pakken:
https://www.npmjs.com/package/react-error-boundary

### Oppgave 3a (AccountDetailsPage)
Refaktorer AccountDetailsPage til å bruke Suspense.

### Oppgave 3b (AccountDetailsPage)
Istedenfor å bruke to separate useSuspenseQuery, se om du kan bruke [useSuspenseQueries](https://tanstack.com/query/latest/docs/framework/react/reference/useSuspenseQueries).


### Oppgave 4 (PaymentPage)
Erstatt useQuery med useSuspenseQuery og Error Boundary.

For å implementere refetch funksjonaliteten kan det være du må rette Error Boundary.
https://tanstack.com/query/latest/docs/framework/react/guides/suspense#resetting-error-boundaries

### Oppgave 5 (AboutPage)
About-siden venter til begge kallene etter Addresseinfo og basicInfo er lastet før den kan vise noe. Produkteieren din ønsker at de skal vises enkeltvis slik at de vises straks de er klare. Kan du refaktorere slik at de vises uavhengig av hverandre? 


## Ressurser 📖

- [React Query Dokumentasjon](https://react-query.tanstack.com/)
- [React Suspense Dok](https://reactjs.org/docs/concurrent-mode-suspense.html)
- [Create React App Dokumentasjon](https://create-react-app.dev/)

## Q&A og Diskusjon 💬

Det oppfordres til spørsmål og diskusjon gjennom hele workshoppen. Ingen spørsmål er for små eller dumme. Vi er her for å lære av hverandre!

Ser frem til en produktiv og lærerik økt sammen med dere. La oss kode og ha det gøy! 🎈
