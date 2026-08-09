/* =============================================================================
   links.js — SOURCE UNIQUE DE TOUT LE CONTENU DU SITE
   -----------------------------------------------------------------------------
   Tout ce qui s'affiche sur les deux pages vient de l'objet SITE ci-dessous.
   Pour changer un lien, un titre ou une description : tu édites ICI, et
   nulle part ailleurs. Les fichiers .html n'ont pas à être touchés.

   Seule exception, et elle est technique : les balises <title>, <meta
   description> et Open Graph restent écrites dans les .html. Les robots de
   Facebook / X / iMessage / Discord ne lancent pas le JavaScript — une balise
   injectée par ce fichier serait invisible pour eux, donc l'aperçu du lien
   partagé serait vide. Ces balises sont commentées dans chaque .html.
   ========================================================================== */

const SITE = {
  /* ---------------------------------------------------------------------------
     1. IDENTITÉ (page d'accueil)
     ------------------------------------------------------------------------ */
  profile: {
    // TODO : ton nom ou ton pseudo, tel que tes clients te connaissent.
    name: "throughmorpheus",
    // TODO : une ligne, courte. Ce que tu fais, pas ton CV.
    tagline: "Développeur & monteur vidéo — je construis des apps et je monte des clips.",
    avatar: {
      // TODO : dépose ton image dans assets/ (carrée, 400x400 suffit),
      // puis passe show à true. Tant que show vaut false, le hub s'affiche
      // sans avatar — et sans requête inutile.
      show: false,
      src: "assets/avatar.png",
      alt: "Portrait de throughmorpheus", // texte lu par les lecteurs d'écran
    },
  },

  /* ---------------------------------------------------------------------------
     2. BOUTON MIS EN AVANT (page d'accueil)
     Le seul bouton coloré de la page. Il envoie vers la page client.
     ------------------------------------------------------------------------ */
  featured: {
    title: "Montage vidéo & clipping",
    description: "Clips, formats courts, longs formats — voir mes réalisations et me contacter.",
    href: "montage.html",
    // Lien interne : pas de nouvel onglet.
    external: false,
  },

  /* ---------------------------------------------------------------------------
     3. RÉSEAUX (page d'accueil)
     ------------------------------------------------------------------------ */
  socials: {
    title: "Réseaux",
    items: [
      {
        title: "YouTube",
        description: "Mes vidéos et mes montages longs.", // TODO
        href: "https://www.youtube.com/@throughmorpheus",
      },
      {
        title: "Instagram",
        description: "Clips, formats verticaux, coulisses.", // TODO
        href: "https://www.instagram.com/4restdump_/",
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     4. PROJETS (page d'accueil)
     Pour ajouter un projet : copie un bloc { } et complète-le.
     Pour en retirer un : supprime son bloc. L'ordre du tableau = l'ordre affiché.
     ------------------------------------------------------------------------ */
  projects: {
    title: "Projets",
    items: [
      {
        title: "TerraTrails",
        description: "Une ligne de description à remplir.", // TODO
        href: "#", // TODO : mettre l'URL du projet (site, App Store ou dépôt GitHub).
      },
      {
        title: "City Explorer",
        description: "Une ligne de description à remplir.", // TODO
        href: "#", // TODO : URL du projet.
      },
      {
        title: "WikiMusic",
        description: "Une ligne de description à remplir.", // TODO
        href: "#", // TODO : URL du projet.
      },
      {
        title: "Kult",
        description: "Une ligne de description à remplir.", // TODO
        href: "#", // TODO : URL du projet.
      },
      {
        title: "Weather",
        description: "Application météo — une ligne de description à remplir.", // TODO
        href: "#", // TODO : URL du projet.
      },
      {
        title: "Clipo",
        description: "Une ligne de description à remplir.", // TODO
        href: "#", // TODO : URL du projet.
      },
    ],
  },

  /* ---------------------------------------------------------------------------
     5. PIED DE PAGE (page d'accueil)
     ------------------------------------------------------------------------ */
  hubFooter: {
    text: "© 2026 throughmorpheus", // TODO
  },

  /* ---------------------------------------------------------------------------
     6. PAGE MONTAGE (montage.html)
     ------------------------------------------------------------------------ */
  montage: {
    // -- En-tête ------------------------------------------------------------
    header: {
      eyebrow: "Montage vidéo & clipping",           // petit surtitre
      title: "Je transforme tes rushes en vidéos qu'on regarde jusqu'au bout.", // TODO
      lede:
        "Deux lignes maximum pour dire à qui tu t'adresses et ce que tu livres. " +
        "Exemple : je monte des clips et des formats courts pour des artistes et des créateurs, du rush brut au fichier prêt à publier.", // TODO
    },

    // -- Ce que je propose : exactement 3 blocs courts ----------------------
    services: {
      title: "Ce que je propose",
      items: [
        {
          title: "Clips",
          description:
            "Deux ou trois lignes sur ce que tu fais et ce que le client reçoit. À remplir.", // TODO
        },
        {
          title: "Formats courts (vertical)",
          description:
            "Reels, Shorts, TikTok — rythme, sous-titres, hooks. À remplir.", // TODO
        },
        {
          title: "Montage long format",
          description:
            "Vidéos YouTube, documentaires courts, narration. À remplir.", // TODO
        },
      ],
    },

    // -- Réalisations : 4 emplacements --------------------------------------
    //    kind: "youtube"   → videoId = l'identifiant de la vidéo.
    //                        Dans https://www.youtube.com/watch?v=ABC123xyz
    //                        l'identifiant est ABC123xyz (après "v=").
    //    kind: "instagram" → href = l'URL du post ou du reel.
    //                        thumb = une image que tu déposes dans assets/
    //                        (Instagram ne permet pas d'intégrer une vidéo
    //                         sans charger ses scripts de suivi : on met donc
    //                         une vignette cliquable, sans tracker.)
    //    kind: "empty"     → emplacement réservé, affiché en pointillés.
    works: {
      title: "Réalisations",
      description: "Une sélection. Le reste est sur mes réseaux.", // TODO
      items: [
        {
          kind: "youtube",
          videoId: "", // TODO : identifiant de la vidéo YouTube.
          title: "Titre de la réalisation", // TODO
          caption: "Client / type de projet / année", // TODO
        },
        {
          kind: "youtube",
          videoId: "", // TODO
          title: "Titre de la réalisation", // TODO
          caption: "Client / type de projet / année", // TODO
        },
        {
          kind: "instagram",
          href: "https://www.instagram.com/4restdump_/", // TODO : URL du reel précis.
          thumb: "", // TODO (facultatif) : "assets/reel-1.jpg"
          title: "Reel — titre", // TODO
          caption: "Format vertical / année", // TODO
        },
        {
          kind: "instagram",
          href: "https://www.instagram.com/4restdump_/", // TODO
          thumb: "", // TODO (facultatif)
          title: "Reel — titre", // TODO
          caption: "Format vertical / année", // TODO
        },
      ],
    },

    // -- Contact ------------------------------------------------------------
    contact: {
      title: "Travailler ensemble",
      description:
        "Dis-moi le format, la durée et la deadline, je te réponds avec un prix et un délai.", // TODO
      email: {
        // TODO : mets ici l'adresse que tu veux montrer publiquement.
        address: "contact@exemple.com",
        subject: "Projet de montage",      // pré-rempli dans le mail
        label: "M'écrire par e-mail",
      },
      instagram: {
        // Instagram n'a pas d'URL de DM direct fiable : on envoie sur le profil.
        href: "https://www.instagram.com/4restdump_/",
        label: "M'écrire en DM Instagram",
      },
    },

    // -- Retour discret vers le hub ----------------------------------------
    back: {
      label: "Retour à l'accueil",
      href: "index.html",
    },
  },
};

/* =============================================================================
   MOTEUR DE RENDU — tu n'as normalement pas à modifier ce qui suit.
   Il lit SITE et remplit les emplacements des deux pages.
   ========================================================================== */

(function () {
  "use strict";

  /** Crée un élément, avec classe et texte optionnels. */
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /** Vrai si l'URL sort du site (http/https/mailto). */
  function isExternal(href) {
    return /^(https?:|mailto:)/i.test(href);
  }

  /** Applique href + sécurité des liens sortants. */
  function link(anchor, href, external) {
    anchor.href = href || "#";
    const out = external === undefined ? isExternal(href) : external;
    if (out && !/^mailto:/i.test(href || "")) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    // Un lien encore en placeholder ne doit pas se faire passer pour actif.
    if (!href || href === "#") {
      anchor.setAttribute("aria-disabled", "true");
      anchor.classList.add("is-placeholder");
    }
    return anchor;
  }

  /** Bouton du hub : titre + description. */
  function button(item, variant) {
    const a = el("a", "card" + (variant ? " card--" + variant : ""));
    link(a, item.href, item.external);
    a.appendChild(el("span", "card__title", item.title));
    if (item.description) {
      a.appendChild(el("span", "card__desc", item.description));
    }
    a.appendChild(el("span", "card__chevron", "→")).setAttribute("aria-hidden", "true");
    return a;
  }

  /** Section titrée du hub, reliée à son titre pour les lecteurs d'écran. */
  function group(mount, data, idBase) {
    if (!mount || !data) return;
    const heading = el("h2", "group__title", data.title);
    heading.id = idBase + "-title";
    mount.setAttribute("aria-labelledby", heading.id);
    mount.appendChild(heading);

    const list = el("ul", "stack");
    (data.items || []).forEach(function (item) {
      const li = el("li");
      li.appendChild(button(item));
      list.appendChild(li);
    });
    mount.appendChild(list);
  }

  /* --------------------------------- HUB --------------------------------- */

  function renderHub() {
    const profile = document.getElementById("profile");
    if (profile && SITE.profile) {
      const av = SITE.profile.avatar;
      if (av && av.show && av.src) {
        const img = el("img", "avatar");
        img.src = av.src;
        img.alt = av.alt || "";
        img.width = 96;
        img.height = 96;
        img.decoding = "async";
        // Si le fichier n'existe pas encore, on retire l'image plutôt que
        // d'afficher une icône cassée.
        img.addEventListener("error", function () {
          img.remove();
        });
        profile.appendChild(img);
      }
      profile.appendChild(el("h1", "name", SITE.profile.name));
      profile.appendChild(el("p", "tagline", SITE.profile.tagline));
    }

    const featured = document.getElementById("featured");
    if (featured && SITE.featured) {
      featured.appendChild(button(SITE.featured, "featured"));
    }

    group(document.getElementById("socials"), SITE.socials, "socials");
    group(document.getElementById("projects"), SITE.projects, "projects");

    const footer = document.getElementById("footer");
    if (footer && SITE.hubFooter) {
      footer.appendChild(el("p", "footer__text", SITE.hubFooter.text));
    }
  }

  /* ------------------------------- MONTAGE ------------------------------- */

  /** Une tuile de la grille « Réalisations ». */
  function work(item) {
    const figure = el("figure", "work");

    if (item.kind === "youtube" && item.videoId) {
      const frame = el("div", "work__media work__media--video");
      const iframe = document.createElement("iframe");
      // youtube-nocookie : pas de cookie publicitaire posé avant lecture.
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(item.videoId) +
        "?rel=0";
      iframe.title = item.title || "Vidéo YouTube";
      iframe.loading = "lazy";
      iframe.allow =
        "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      frame.appendChild(iframe);
      figure.appendChild(frame);
    } else if (item.kind === "instagram" && item.href) {
      const a = el("a", "work__media work__media--link");
      link(a, item.href);
      if (item.thumb) {
        const img = el("img", "work__thumb");
        img.src = item.thumb;
        img.alt = item.title || "";
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener("error", function () {
          img.remove();
          a.classList.add("work__media--bare");
        });
        a.appendChild(img);
      } else {
        a.classList.add("work__media--bare");
      }
      const badge = el("span", "work__badge", "Voir sur Instagram →");
      a.appendChild(badge);
      figure.appendChild(a);
    } else {
      // Emplacement encore vide : visible mais neutre.
      const slot = el("div", "work__media work__media--empty");
      slot.appendChild(el("span", "work__slot", "Emplacement libre"));
      figure.appendChild(slot);
    }

    const caption = el("figcaption", "work__caption");
    if (item.title) caption.appendChild(el("span", "work__title", item.title));
    if (item.caption) caption.appendChild(el("span", "work__meta", item.caption));
    figure.appendChild(caption);
    return figure;
  }

  function renderMontage() {
    const M = SITE.montage;
    if (!M) return;

    const header = document.getElementById("montage-header");
    if (header) {
      if (M.header.eyebrow) header.appendChild(el("p", "eyebrow", M.header.eyebrow));
      header.appendChild(el("h1", "display", M.header.title));
      header.appendChild(el("p", "lede", M.header.lede));
    }

    const services = document.getElementById("services");
    if (services && M.services) {
      const h = el("h2", "section__title", M.services.title);
      h.id = "services-title";
      services.setAttribute("aria-labelledby", h.id);
      services.appendChild(h);
      const grid = el("div", "grid grid--three");
      M.services.items.forEach(function (s) {
        const block = el("div", "block");
        block.appendChild(el("h3", "block__title", s.title));
        block.appendChild(el("p", "block__desc", s.description));
        grid.appendChild(block);
      });
      services.appendChild(grid);
    }

    const works = document.getElementById("works");
    if (works && M.works) {
      const h = el("h2", "section__title", M.works.title);
      h.id = "works-title";
      works.setAttribute("aria-labelledby", h.id);
      works.appendChild(h);
      if (M.works.description) {
        works.appendChild(el("p", "section__desc", M.works.description));
      }
      const grid = el("div", "grid grid--two");
      M.works.items.forEach(function (item) {
        grid.appendChild(work(item));
      });
      works.appendChild(grid);
    }

    const contact = document.getElementById("contact");
    if (contact && M.contact) {
      const h = el("h2", "section__title", M.contact.title);
      h.id = "contact-title";
      contact.setAttribute("aria-labelledby", h.id);
      contact.appendChild(h);
      if (M.contact.description) {
        contact.appendChild(el("p", "section__desc", M.contact.description));
      }
      const row = el("div", "actions");

      if (M.contact.email && M.contact.email.address) {
        const mailto =
          "mailto:" +
          M.contact.email.address +
          (M.contact.email.subject
            ? "?subject=" + encodeURIComponent(M.contact.email.subject)
            : "");
        const a = el("a", "btn btn--accent", M.contact.email.label);
        link(a, mailto);
        row.appendChild(a);
      }
      if (M.contact.instagram && M.contact.instagram.href) {
        const a = el("a", "btn", M.contact.instagram.label);
        link(a, M.contact.instagram.href);
        row.appendChild(a);
      }
      contact.appendChild(row);
    }

    const back = document.getElementById("back");
    if (back && M.back) {
      const a = el("a", "backlink", M.back.label);
      link(a, M.back.href, false);
      back.appendChild(a);
    }
  }

  /* ------------------------------ AIGUILLAGE ----------------------------- */

  function start() {
    const page = document.body.getAttribute("data-page");
    if (page === "hub") renderHub();
    else if (page === "montage") renderMontage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
