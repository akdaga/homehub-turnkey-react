import netlifyIdentity from 'netlify-identity-widget'
import { useEffect, useState } from 'react'

export function initIdentity() {
  netlifyIdentity.on('login', async (user) => {
    try {
      const token = await user.jwt();
      document.cookie = `nf_jwt=${token}; Path=/; Max-Age=3600; SameSite=Lax`;
      try { netlifyIdentity.close(); } catch(e){}
    } catch(e){ console.warn('JWT cookie set failed', e) }
  });
  netlifyIdentity.on('logout', () => {
    document.cookie = 'nf_jwt=; Path=/; Max-Age=0; SameSite=Lax';
    try { netlifyIdentity.close(); } catch(e){}
  });

  netlifyIdentity.on('login', () => { try { netlifyIdentity.close(); } catch(e){} })
  netlifyIdentity.on('logout', () => { try { netlifyIdentity.close(); } catch(e){} })
  try { netlifyIdentity.init({ locale: 'en' }) } catch(e) { console.warn('Identity init skipped', e?.message) }
}
export function useIdentity() {
  const [user,setUser]=useState(null)
  useEffect(()=>{
    setUser(netlifyIdentity.currentUser())
    const onLogin=(u)=>setUser(u); const onLogout=()=>setUser(null)
    netlifyIdentity.on('login',onLogin); netlifyIdentity.on('logout',onLogout)
    return ()=>{ netlifyIdentity.off('login',onLogin); netlifyIdentity.off('logout',onLogout) }
  },[])
  return { user, netlifyIdentity }
}