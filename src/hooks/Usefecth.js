

export const UseFectch =()=>{

    const datapost =async(profile)=>{

      try {
         const res = await fetch(
           "https://sheet.best/api/sheets/7ff174fa-7fe4-497b-b5e9-148af98debf5",
           {
             method: "POST",
             headers: {
               "Content-Type": "application/json",
             },
             body: JSON.stringify(profile),
           }
         );
         
       } catch (error) {
         console.log(error);
       }
    };

    return {datapost}
}