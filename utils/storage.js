export const storage = {
read(key){
try{ return JSON.parse(localStorage.getItem(key)); }catch(e){return null}
},
write(key, value){
localStorage.setItem(key, JSON.stringify(value));
}
};