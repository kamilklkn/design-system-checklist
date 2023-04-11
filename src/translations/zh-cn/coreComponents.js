export default {
  title: "核心组件",
  description:
    "组件是用户界面的主要构建块。构建一个可重复使用的组件库，通过减少设计和技术债务，加快开发进程，增强你的产品开发工作流程。核心组件被分解过于细碎会失去组件的意义。",
  sections: {
    "cc-avatar": {
      title: "用户头像 (Avatar)",
      description:
        "头像是用来显示用户照片的缩略图或任何其他类型内容的视觉表现。",
      checklist: {
        "cc-avatar-image": {
          title: "图片",
          description:
            "用户头像应将图片包含在其形状中，并应考虑到任意大小的图片尺寸，因为该图片可能来自未知的数据源。",
        },
        "cc-avatar-image-fallback": {
          title: "图片加载出错",
          description:
            "当没有图片可用时，应该有备选方案。这可以通过默认图片或首字母来完成。",
        },
        "cc-avatar-a11y": {
          title: "可访问性（无障碍）",
          description:
            "始终为屏幕阅读器提供描述，描述头像上显示的内容，而不是仅仅为其角色命名。",
        },
        "cc-avatar-sizes": {
          title: "尺寸",
          description:
            "使用头像的情况很多，都需要不同尺寸的组件。对于一般的项目，至少要使用2-3种不同的尺寸，并确保至少有一个小尺寸可用。",
        },
        "cc-avatar-icon": {
          title: "图标",
          description:
            "头像可用一个图标来代替图片，以强调那些不一定有（或需要）与之相关图片的区域。",
        },
        "cc-avatar-bg": {
          title: "背景颜色",
          description:
            "当与图标或文本一起使用时，必须有一个来自设计系统颜色变量（design system colour tokens）的背景颜色应用于头像形状。根据WCAG AA标准，请确保图标和文本与背景色有足够的对比度。",
        },
      },
    },
    "cc-badge": {
      title: "徽标 (Badge)",
      description:
        "徽标是代表一个对象或用户输入值状态的元素。",
      checklist: {
        "cc-badge-appearance": {
          title: "外观",
          description:
            "徽标在产品中可能扮演不同的角色，为每个角色预先定义一个颜色有助于用户理解其含义。当改变颜色时，根据WCAG AA标准，确保文本与背景色有足够的对比度。",
        },
        "cc-badge-dismiss": {
          title: "关闭状态",
          description:
            "徽标可作为一种动态的方式来显示选定的值，应该有一种方式来取消关闭它们。",
        },
      },
    },
    "cc-banner": {
      title: "横幅 (Banner)",
      description:
        "横幅显示一个可操作的信息，作为一种与用户沟通的显眼方式。",
      checklist: {
        "cc-banner-appearance": {
          title: "外观",
          description:
            "横幅用于显示不同类型的信息，根据它们所扮演的角色来区分它们的视觉外观很重要。如果使用背景色来区分它们，根据WCAG AA标准，确保与内容有足够的对比度。",
        },
        "cc-banner-image": {
          title: "用于图标(icon)或图片(images)的区域",
          description:
            "横幅可以使用辅助图标或图片来补充其信息。横幅不应该被用来代替文本内容。",
        },
        "cc-banner-actions": {
          title: "行为",
          description:
            "横幅中的行为召唤应该与文本相关，并提供一种对发送给用户的信息作出反应的方式。",
        },
        "cc-banner-dismiss": {
          title: "关闭状态",
          description:
            "不要用页面上的横幅让用户感到过于焦虑，添加一个可撤销的状态。可以是一个单独的关闭按钮或其他行动方式。",
        },
        "cc-banner-a11y": {
          title: "可访问性（无障碍）",
          description:
            "如果一个横幅动态地出现在页面上，应该通过无障碍设计告知那些使用无障碍工具的用户。",
        },
        "cc-banner-mobile": {
          title: "响应性",
          description:
            "横幅应该适应视口(viewport)的大小。这通常意味着在移动端为全宽(full-width)，以节省空间。",
        },
      },
    },
    "cc-button": {
      title: "按钮 (Button)",
      description:
        "按钮是用于单步操作的互动元素。",
      checklist: {
        "cc-button-hover": {
          title: "悬停状态",
          description:
            "在被鼠标光标悬停时，明确显示按钮是互动的。",
        },
        "cc-button-active": {
          title: "作用状态",
          description:
            "当一个按钮被按下时使用。同样的状态可以用来表示负责切换页面上另一个元素的按钮，当该元素在视觉上已经打开。",
        },
        "cc-button-focus": {
          title: "焦点状态",
          description:
            "当一个按钮通过键盘导航被选中时使用。",
        },
        "cc-button-icon": {
          title: "图标支持",
          description:
            "当图标在其标签旁使用时，可较好传达按钮的目的，或者在没有足够的空间时可以不使用文字。当仅使用图标时，请确保提供无障碍标签。",
        },
        "cc-button-disabled": {
          title: "禁用",
          description:
            "从视觉上显示一个按钮不可互动，并限制它被用户按下。",
        },
        "cc-button-loading": {
          title: "正在加载",
          description:
            "当用户在按下一个按钮后，需要等待加载结果时使用。如果使用旋转器来显示这种状态，请确保它不会改变原始按钮的宽度或高度。",
        },
        "cc-button-full-width": {
          title: "全宽",
          description:
            "默认情况下，按钮的宽度为其内容的宽度，但它们也应该有一个全宽的变体，以便在移动设备上运行良好。",
        },
        "cc-button-variants": {
          title: "变体",
          description:
            "当使用多个按钮时，应该有一种方法来区分主要按钮和次要按钮。按钮可能对用户起到不同的作用，或者在不同类型的设备上使用，所以必须随之改变它们的外观。",
        },
        "cc-button-sizes": {
          title: "尺寸",
          description:
            "按钮可以在网站的不同区域使用，并且可能有多种预定的尺寸。在移动设备上，根据iOS和Android的可访问性（无障碍）指南，可触摸的区域必须至少为48px，才能被访问。",
        },
      },
    },
    "cc-card": {
      title: "Card",
      description:
        "Cards are used to group information about subjects and their related actions.",
      checklist: {
        "cc-card-content": {
          title: "Supports any type of content",
          description:
            "Cards are one of the most used components in the product, so they have to be flexible enough to support any other components placed in them.",
        },
        "cc-card-structure": {
          title: "Information structure",
          description:
            "No matter how flexible cards are, it’s important for cards to have a specific structure for its elements for product consistency.",
        },
        "cc-card-media": {
          title: "Supports media sections",
          description:
            "One of the most popular scenarios for using cards is mixing them with media content. The most popular options are having a full-width area on top of the content or full-height area at one of the card’s sides.",
        },
        "cc-card-actions": {
          title: "Supplementary actions",
          description:
            "Cards can be used with actions usually placed at the bottom of the card, or the card itself can be tappable and represent an action.",
        },
        "cc-card-mobile": {
          title: "Responsiveness",
          description:
            "On mobile viewports cards are usually full-width in order to save space for the content.",
        },
      },
    },
    "cc-carousel": {
      title: "Carousel",
      description:
        "Carousels stack the same type of items and allows scrolling through them horizontally.",
      checklist: {
        "cc-carousel-controls": {
          title: "Navigation controls",
          description:
            "Carousels should have easy-to-find navigation controls for scrolling through content.",
        },
        "cc-carousel-content": {
          title: "Supports any content",
          description:
            "Carousels can be used in different contexts and shouldn’t be limited to a specific child component. In some scenarios you might want items within the same carousel to differ from each other.",
        },
        "cc-carousel-width": {
          title: "Items width customisation",
          description:
            "For simple products, it might be fine to use multiple predefined sizes for carousel items. For more flexibility, it’s good to provide a way to define a custom width.",
        },
        "cc-carousel-touch": {
          title: "Touch events support",
          description:
            "Carousels should be scrollable on touch devices. Some of the best practices are to use native scrolling and to make sure you’re supporting the same behaviour for all touch devices, not just mobile phones.",
        },
        "cc-carousel-keyboard": {
          title: "Keyboard navigation",
          description:
            "It should be possible to scroll through content with keyboard arrows when focused on navigation controls.",
        },
        "cc-carousel-mobile": {
          title: "Responsiveness",
          description:
            "It’s good practice to hide or reduce the size of navigation controls for mobile viewports to improve the visibility of the content.",
        },
      },
    },
    "cc-dropdown": {
      title: "Dropdown",
      description:
        "Dropdowns are used to display a contextual subview with a list of actions or content related to the area where the dropdown is.",
      checklist: {
        "cc-dropdown-content": {
          title: "Supports any type of content",
          description:
            "Dropdowns may be used in a lot of contexts like date pickers, language selection or other product features.",
        },
        "cc-dropdown-menu": {
          title: "Action menu",
          description:
            "One of the most used scenarios for dropdowns is providing an action menu for the user, so it’s useful to have this layout defined.",
        },
        "cc-dropdown-trap": {
          title: "Focus trapping",
          description:
            "Once the dropdown’s opened, the focus should work only for elements inside the dropdown. When it’s closed, the focus should move to the dropdown trigger.",
        },
        "cc-dropdown-close": {
          title: "Close action",
          description:
            "Either some actions inside the dropdown should close it or there should be a separate close button. Also, it’s good practice to close the dropdown when a user clicks outside.",
        },
        "cc-dropdown-keyboard": {
          title: "Keyboard navigation",
          description:
            "It should be possible to navigate through dropdown children elements with the keyboard and close it with an Esc key.",
        },
        "cc-dropdown-position": {
          title: "Dynamic positioning",
          description:
            "Dropdown content should be displayed based on the current position of the trigger element on the screen and always visible to the user.",
        },
        "cc-dropdown-mobile": {
          title: "Responsiveness",
          description:
            "Dropdown content should be adapted for mobile viewpoints as it may take a lot of space on desktops.",
        },
      },
    },
    "cc-icon": {
      title: "Icon",
      description:
        "The icon component is a way to align the way iconography static assets are displayed in the product.",
      checklist: {
        "cc-icon-sizes": {
          title: "Sizes",
          description:
            "Icons should have a number of predefined sizes to provide a holistic experience across the product. Typography pairings may be used for these size values to ensure that they are aligned with the text sizes.",
        },
        "cc-icon-colors": {
          title: "Colours",
          description:
            "Icons should be using values from the design system colour palette. Using parent element text colour for icon fill colour can make this automatic.",
        },
      },
    },
    "cc-checkbox": {
      title: "Input checkbox",
      description:
        "An input checkbox is a form element used for selecting one or multiple options.",
      checklist: {
        "cc-checkbox-checked": {
          title: "Checked state",
          description:
            "Used when the checkbox is selected and will use its value for the form submission.",
        },
        "cc-checkbox-disabled": {
          title: "Disabled state",
          description:
            "Prevents checkbox interactions and removes its value from the form submission.",
        },
        "cc-checkbox-indeterminate": {
          title: "Indeterminate state",
          description:
            "Used when the checkbox has children selectable elements and only some of them are selected.",
        },
        "cc-checkbox-label": {
          title: "Label",
          description:
            "There should be a text label linked with the checkbox field. Clicking the label should also trigger the checkbox selection.",
        },
        "cc-checkbox-error": {
          title: "Error state",
          description:
            "The error state is used for form validation errors when the error is related to the checkbox field only. Always use a text error along with changing the colour of the field.",
        },
        "cc-checkbox-keyboard": {
          title: "Keyboard support",
          description:
            "Checkbox selections should be triggered with the Space key. Using native elements for this should provide this kind of interaction out of the box.",
        },
        "cc-checkbox-group": {
          title: "Checkbox group",
          description:
            "Checkboxes can be grouped to work with multiple values at the same time.",
        },
      },
    },
    "cc-radio": {
      title: "Input radio",
      description:
        "An input radio is a form element used for selecting one option from a list.",
      checklist: {
        "cc-radio-checked": {
          title: "Checked state",
          description:
            "Used when the radio is selected and will use its value for the form submission. A radio input can’t be unselected by pressing it again.",
        },
        "cc-radio-disabled": {
          title: "Disabled state",
          description:
            "Prevents radio interactions and removes its value from the form submission.",
        },
        "cc-radio-label": {
          title: "Label",
          description:
            "There should be a text label linked with the radio field. Clicking the label should also trigger the radio selection.",
        },
        "cc-radio-error": {
          title: "Error state",
          description:
            "The error state is used for form validation errors when the error is related to the radio field only. Always use a text error along with changing the colour of the field.",
        },
        "cc-radio-keyboard": {
          title: "Keyboard support",
          description:
            "A radio selection should be triggered when the Space key is pressed. Using native elements for this should provide this kind of interaction out of the box.",
        },
        "cc-radio-group": {
          title: "Radio group",
          description:
            "Radio inputs should always be used in a group. If  one of them is selected, it can be deselected only by choosing another radio.",
        },
      },
    },
    "cc-text-field": {
      title: "Input text",
      description: "Input text lets users enter and edit text.",
      checklist: {
        "cc-text-field-disabled": {
          title: "Disabled state",
          description:
            "Prevents input interactions and removes its value from the form submission.",
        },
        "cc-text-field-placeholder": {
          title: "Placeholder",
          description:
            "When there’s no value entered, show a placeholder with a potential value example. Don’t use placeholders as labels for the inputs.",
        },
        "cc-text-field-label": {
          title: "Label",
          description:
            "There should be a text label linked with the text field. Clicking the label should move the focus to the field.",
        },
        "cc-text-field-error": {
          title: "Error state",
          description:
            "The error state is used for form validation errors when the error is related to the text field only. Always use a text error along with changing the colour of the field.",
        },
        "cc-text-field-focused": {
          title: "Focused state",
          description:
            "The focused state should highlight the text field when users start to interact with it. There is always only one focused field in the form.",
        },
        "cc-text-field-autocomplete": {
          title: "Autocomplete",
          description:
            "When applicable, adding support for the HTML autocomplete attribute will allow users to easily enter different data types.",
        },
        "cc-text-field-icon": {
          title: "Icon support",
          description:
            "Icons are used to describe input methods, express a text field state or provide additional functionality.",
        },
      },
    },
    "cc-switch": {
      title: "Input switch",
      description:
        "Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.",
      checklist: {
        "cc-switch-checked": {
          title: "Checked state",
          description:
            "Used when an input switch is turned on. It’s better to provide an additional way to indicate the checked state besides changing its colour when applicable.",
        },
        "cc-switch-disabled": {
          title: "Disabled state",
          description: "Prevents interacting with an input switch.",
        },
        "cc-switch-label": {
          title: "Label",
          description:
            "There should be a text label linked with the switch field. Clicking the label should also trigger the input selection. ",
        },
        "cc-switch-keyboard": {
          title: "Keyboard support",
          description:
            "A switch selection should be triggered when the Space key is pressed.",
        },
      },
    },
    "cc-list": {
      title: "List",
      description:
        "Lists define the layout of the page content or groups of elements stacking them vertically or horizontally.",
      checklist: {
        "cc-list-content": {
          title: "Supports any type of content",
          description:
            "Lists can be used in any context from page-level layout to managing offsets between granular components. hey should work with any component used inside.",
        },
        "cc-list-horizontal": {
          title: "Horizontal stacking",
          description:
            "Lists can be used for inline elements and they have to manage how they’re stacked horizontally, including handling offsets between multiple rows of elements.",
        },
        "cc-list-divided": {
          title: "Divided variant",
          description:
            "Lists with dividers are the best practice advised by many platform guidelines (especially on mobile).",
        },
        "cc-list-action": {
          title: "Supports actionable content",
          description:
            "Sometimes lists are used for grouping tappable components, where the whole area of the list item should be clickable.",
        },
      },
    },
    "cc-loading-indicator": {
      title: "Loading indicator",
      description:
        "The loading indicator shows that an operation’s being performed and how long the process will take.",
      checklist: {
        "cc-loading-indicator-variants": {
          title: "Linear and non-linear variants",
          description:
            "Depending on the context and the component it’s used for, the loading indicator can be represented either with linear or with a non-linear (e.g. circular) variant.",
        },
        "cc-loading-indicator-wait": {
          title: "Determinate or indeterminate wait time",
          description:
            "In some cases, the wait time can’t be determined. The loading indicator should be shown until the loading finishes or an error happens. In other cases, it’s better to indicate how much time’s left until the loading is done.",
        },
        "cc-loading-indicator-light": {
          title: "Light variant",
          description:
            "The loading indicator should respect its parent element background and provide a variant to be used on darker background colours.",
        },
        "cc-loading-indicator-reduced": {
          title: "Reduced motion",
          description:
            "The loading indicator should be synced with the system motion settings and reduce its animation speed when reduced motion settings are turned on.",
        },
      },
    },
    "cc-modal": {
      title: "Modal",
      description:
        "Modals are containers appearing in front of the main content to provide critical information or an actionable piece of content.",
      checklist: {
        "cc-modal-supports-content": {
          title: "Supports any type of content",
          description:
            "Like any other container, modals can be used in different scenarios and you should be able to use it with any other component inside.",
        },
        "cc-modal-actions": {
          title: "Supplementary actions",
          description:
            "Since content in the modal may be actionable, it’s important to have an area for action elements. This area is usually located at the bottom of the modal container.",
        },
        "cc-modal-close": {
          title: "Close action",
          description:
            "Modals should provide a clear way to be closed as they’re blocking content when open. This may be either a separate close button or one of the supplementary actions.",
        },
        "cc-modal-structure": {
          title: "Information structure",
          description:
            "Even though modals can be used as an empty container for the content, they need a defined information structure to provide a holistic experience. It may include defining how titles and subtitles look by default or where an action element’s area is.",
        },
        "cc-modal-keyboard": {
          title: "Keyboard navigation support",
          description:
            "It should be possible to close a modal by pressing the Esc key and all the focusable elements inside the modal container should be accessible with keyboard navigation.",
        },
        "cc-modal-trap": {
          title: "Focus trapping",
          description:
            "Once a modal is opened, the focus should be moved to the first element inside the modal and should be looped within the modal container. Closing the modal should return the focus to the last focused element on the page.",
        },
      },
    },
    "cc-tabs": {
      title: "Tabs",
      description:
        "Tabs organise navigation between multiple pages or content sections.",
      checklist: {
        "cc-tabs-active": {
          title: "Active button state",
          description:
            "There should be a clear differentiation between selected and unselected tab buttons.",
        },
        "cc-tabs-icon": {
          title: "Button icon support",
          description:
            "Icons help show the purpose of the tab buttons when used next to its label.",
        },
        "cc-tabs-equal": {
          title: "Equally-sized tab buttons",
          description:
            "Tabs can be used in a relatively small-sized container where you need to switch between a definite number of sections. For such scenarios, it’s better to support a variant where the button’s area is divided equally.",
        },
        "cc-tabs-keyboard": {
          title: "Keyboard navigation",
          description:
            "All tab buttons should be focusable and navigation between the tab’s component should be accessible from the keyboard.",
        },
        "cc-tabs-mobile": {
          title: "Responsiveness",
          description:
            "If all tabs on mobile don’t fit into the viewport, users should still have access to all tab buttons. Ways to solve this can be making the button area scrollable for mobile or showing a More button containing a dropdown with the rest of the buttons.",
        },
      },
    },
    "cc-toast": {
      title: "Toast",
      description:
        "Toasts provide short meaningful feedback messages about the action results.",
      checklist: {
        "cc-toast-auto": {
          title: "Dismissed automatically",
          description:
            "Toast messages shouldn’t interrupt the user flow, block the screen for a long time or require additional action from the user.",
        },
        "cc-toast-action": {
          title: "Action support",
          description:
            "Besides displaying the message, toasts may also provide an action related to the message like undoing an action.",
        },
        "cc-toast-queue": {
          title: "Handles multiple instances",
          description:
            "Even though it doesn’t happen often, toasts can be called from multiple sources at the same time and all resulting toasts should be queued. It’s good practice not to show all the messages at the same time.",
        },
        "cc-toast-a11y": {
          title: "Accessibility",
          description:
            "Toast messages should be announced by the voice assistive technology and their action should be easily accessible from the keyboard.",
        },
        "cc-toast-mobile": {
          title: "Responsiveness",
          description:
            "Toasts should be aligned with the mobile viewport and their action should be easily reachable for tapping.",
        },
      },
    },
    "cc-tooltip": {
      title: "Tooltip",
      description:
        "Tooltips are desktop-only components that display additional information when hovering over or focusing on an element.",
      checklist: {
        "cc-tooltip-keyboard": {
          title: "Keyboard hover support",
          description:
            "Tooltips should be accessible when an element is focused using the keyboard.",
        },
        "cc-tooltip-position": {
          title: "Dynamic positioning",
          description:
            "Tooltip content should be displayed based on the current position of the trigger element on the screen and always visible to the user.",
        },
        "cc-tooltip-timeout": {
          title: "Hover timeout",
          description:
            "Having a small timeout before triggering a tooltip will help to prevent occasionally showing tooltips while users move their mouse cursor.",
        },
        "cc-tooltip-light": {
          title: "Light variant",
          description:
            "The tooltip should respect its parent element background and provide a variant to be used on darker background colours.",
        },
        "cc-tooltip-group": {
          title: "Instant transition for element groups",
          description:
            "If there’s a group of elements using tooltips, hovering over another element while a tooltip’s already active shouldn’t trigger the animation.",
        },
      },
    },
  },
};
