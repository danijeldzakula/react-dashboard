import React from 'react';

const Sidebar = ({ orientation, active, stateActive, children }) => {
  return (
    <>
      <aside className={`sidebar ${orientation || 'sidebar-right'} ${!active || false ? '' : 'is-active'}`}>
        <header className='sidebar-header'>
          <button type='button' className='btn sidebar-close-btn' style={{ backgroundImage: 'url(../images/icons/close-icon.svg)'}} onClick={() => stateActive(false)} />
        </header>
        <main className='sidebar-content'>
          <div className='overflow-lock'>
            <div className='overflow-unlock'>
              {children}
            </div>
          </div>
        </main>
      </aside>
      <div className={`overlay ${!active ? '' : 'is-active'}`} onClick={() => stateActive(false)} />
    </>
  )
}

export default Sidebar;