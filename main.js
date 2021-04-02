scroll_to = (destination) => {
    const elem = document.getElementById(destination);

    this.isShowMenu = false;

    if (elem)
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
  }