export function waitUntilTimeout(timeout){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },timeout);
    })
}