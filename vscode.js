// ======== Standalone Trae Themes (Deep Blue) + Color Customizations ========
const DEEP_BLUE_COLORS = {
    'checkbox.border': '#6b6b6b',
    'editor.foreground': '#d4d4d4',
    'editor.inactiveSelectionBackground': '#3a3d41',
    'editor.selectionHighlightBackground': '#add6ff26',
    'editorBracketMatch.background': '#d5d8e03d',
    'editorBracketMatch.border': '#d5d8e000',
    'list.dropBackground': '#3579ff33',
    'sideBarTitle.foreground': '#bbbbbb',
    'statusBarItem.remoteForeground': '#ffffff',
    'statusBarItem.remoteBackground': '#252a38',
    'statusBarItem.activeBackground': '#252a38',
    'ports.iconRunningProcessForeground': '#369432',
    'tab.selectedBackground': '#343b4d',
    'tab.selectedForeground': '#ffffffa0',
    'tab.selectedBorderTop': '#252a38',
    'tab.lastPinnedBorder': '#252a38',
    'list.activeSelectionIconForeground': '#ffffff',
    'terminal.inactiveSelectionBackground': '#3a3d41',
    'terminal.selectionBackground': '#3579ff47',
    'terminal.background': '#171b26',
    'panel.background': '#171b26',
    'widget.border': '#3c455d',
    'actionBar.toggledBackground': '#383a49',
    'editorCursor.foreground': '#ffffff',
    'editorLineNumber.foreground': '#9599a6',
    'editorLineNumber.activeForeground': '#e0e3ee',
    'editor.selectionBackground': '#3579ff47',
    'editor.lineHighlightBackground': '#282b3a',
    'editorStickyScrollHover.background': '#282b3a',
    'editorStickyScroll.background': '#171b26',
    'editorGutter.background': '#171b26',
    'breadcrumb.background': '#171b26',
    'editorLink.activeForeground': '#387bff',
    'editor.background': '#171b26',
    'activityBar.background': '#252a38',
    'sideBar.background': '#171b26',
    'sideBar.border': '#343b4d',
    'activityBarBadge.background': '#171b26',
    'statusBar.background': '#252a38',
    'statusBar.noFolderBackground': '#252a38',
    'statusBar.debuggingBackground': '#252a38',
    'editorGroupHeader.tabsBackground': '#171b26',
    'editorGroupHeader.noTabsBackground': '#171b26',
    'selection.background': '#343b4d',
    'sideBarSectionHeader.background': '#171b26',
    'sideBarSectionHeader.border': '#343b4d',
    'editor.tab.background': '#171b26',
    'titleBar.activeBackground': '#252a38',
    'titleBar.activeForeground': '#cccccc',
    'titleBar.inactiveBackground': '#252a38',
    'titleBar.inactiveForeground': '#cccccc99',
    'tab.activeBackground': '#252a38',
    'tab.activeBorder': '#252a38',
    'tab.activeBorderTop': '#252a38',
    'tab.activeForeground': '#ffffff',
    'tab.activeModifiedBorder': '#252a38',
    'tab.border': '#252526',
    'tab.dragAndDropBorder': '#ffffff',
    'tab.hoverBackground': '#343b4d',
    'tab.hoverBorder': '#252a38',
    'tab.inactiveBackground': '#171b26',
    'tab.inactiveForeground': '#ffffff80',
    'tab.inactiveModifiedBorder': '#252a38',
    'tab.unfocusedActiveBackground': '#171b26',
    'tab.unfocusedActiveBorder': '#252a38',
    'tab.unfocusedActiveBorderTop': '#252a38',
    'tab.unfocusedActiveForeground': '#ffffff80',
    'tab.unfocusedActiveModifiedBorder': '#252a38',
    'tab.unfocusedHoverBackground': '#171b26',
    'tab.unfocusedHoverBorder': '#252a38',
    'tab.unfocusedInactiveBackground': '#171b26',
    'tab.unfocusedInactiveForeground': '#ffffff40',
    'tab.unfocusedInactiveModifiedBorder': '#252a38',
    'editorIndentGuide.background1': '#aabcf214',
    'editorIndentGuide.activeBackground1': '#aabcf23d',
    'list.activeSelectionBackground': '#343b4d',
    'list.inactiveSelectionBackground': '#343b4d',
    'list.hoverBackground': '#343b4d',
    'list.focusBackground': '#343b4d',
    'input.background': '#171b26',
    'dropdown.background': '#171b26',
    'dropdown.listBackground': '#171b26',
    'checkbox.background': '#171b26',
    'focusBorder': '#00000000',
    'modernUI.shellBackground': '#252a38',
    'modernUI.inactiveShellBackground': '#252a38',
    'surface.background': '#171b26',
    'surface.border': '#00000000',
    'editor.border': '#00000000',
    'editorGroup.border': '#00000000',
    'modernPanel.border': '#00000000',
    'modernActivityBar.border': '#00000000',
    'modernTab.activeBackground': '#252a38',
    'modernTab.hoverBackground': '#343b4d',
    'modernActivityBarItem.activeBackground': '#171b26',
    'modernActivityBarItem.hoverBackground': '#343b4d',
    'modernEditorTab.activeBackground': '#252a38',
    'modernEditorTab.hoverBackground': '#343b4d',
    'modernEditorTab.activeHoverBackground': '#252a38',
    'modernEditorTab.inactiveBackground': '#00000000',
    'quickInput.background': '#171b26',
    'quickInputList.focusBackground': '#343b4d',
    'editorHoverWidget.background': '#171b26',
    'editorHoverWidget.border': '#3c455d',
    'editorHoverWidget.statusBarBackground': '#252a38',
    'editorSuggestWidget.background': '#171b26',
    'editorSuggestWidget.border': '#3c455d',
    'editorSuggestWidget.selectedBackground': '#343b4d',
    'editorWidget.background': '#171b26',
    'editorWidget.border': '#3c455d',
    'menu.background': '#171b26',
    'menu.border': '#3c455d',
    'menu.selectionBackground': '#343b4d',
    'notifications.background': '#171b26',
    'notifications.border': '#3c455d',
    'notificationCenterHeader.background': '#252a38',
    'textCodeBlock.background': '#252a38',
    'scrollbar.background': '#00000000',
    'scrollbar.shadow': '#00000000',
    'editorOverviewRuler.border': '#00000000',
};

const DEEP_BLUE_TOKEN_COLORS = [
    { settings: { foreground: '#82D99F' }, scope: ['meta.embedded', 'source.groovy.embedded', 'string meta.image.inline.markdown', 'variable.legacy.builtin.python'] },
    { settings: { fontStyle: 'italic' }, scope: 'emphasis' },
    { settings: { fontStyle: 'bold' }, scope: 'strong' },
    { settings: { foreground: '#569cd6' }, scope: 'header' },
    { settings: { foreground: '#737780' }, scope: 'comment' },
    { settings: { foreground: '#80BBFF' }, scope: 'constant.language' },
    { settings: { foreground: '#F48CCA' }, scope: ['constant.numeric', 'variable.other.enummember', 'keyword.operator.plus.exponent', 'keyword.operator.minus.exponent'] },
    { settings: { foreground: '#82D99F' }, scope: 'constant.regexp' },
    { settings: { foreground: '#F2858C' }, scope: 'entity.name.tag' },
    { settings: { foreground: '#DED47E' }, scope: ['entity.name.tag.css', 'entity.name.tag.less'] },
    { settings: { foreground: '#DED47E' }, scope: 'entity.other.attribute-name' },
    { settings: { foreground: '#DED47E' }, scope: ['entity.other.attribute-name.class.css', 'source.css entity.other.attribute-name.class', 'entity.other.attribute-name.id.css', 'entity.other.attribute-name.parent-selector.css', 'entity.other.attribute-name.parent.less', 'source.css entity.other.attribute-name.pseudo-class', 'entity.other.attribute-name.pseudo-element.css', 'source.css.less entity.other.attribute-name.id', 'entity.other.attribute-name.scss'] },
    { settings: { foreground: '#CC4B53' }, scope: 'invalid' },
    { settings: { fontStyle: 'underline' }, scope: 'markup.underline' },
    { settings: { fontStyle: 'bold', foreground: '#D5D8E0' }, scope: 'markup.bold' },
    { settings: { fontStyle: 'bold', foreground: '#80BBFF' }, scope: 'markup.heading' },
    { settings: { fontStyle: 'italic' }, scope: 'markup.italic' },
    { settings: { fontStyle: 'strikethrough' }, scope: 'markup.strikethrough' },
    { settings: { foreground: '#66CCAA' }, scope: 'markup.inserted' },
    { settings: { foreground: '#F2858C' }, scope: 'markup.deleted' },
    { settings: { foreground: '#80BBFF' }, scope: 'markup.changed' },
    { settings: { foreground: '#737780' }, scope: 'punctuation.definition.quote.begin.markdown' },
    { settings: { foreground: '#F2858C' }, scope: 'punctuation.definition.list.begin.markdown' },
    { settings: { foreground: '#82D99F' }, scope: 'markup.inline.raw' },
    { settings: { foreground: '#D5D8E0' }, scope: 'punctuation.definition.tag' },
    { settings: { foreground: '#80BBFF' }, scope: ['meta.preprocessor', 'entity.name.function.preprocessor'] },
    { settings: { foreground: '#82D99F' }, scope: 'meta.preprocessor.string' },
    { settings: { foreground: '#80BBFF' }, scope: 'meta.preprocessor.numeric' },
    { settings: { foreground: '#82D99F' }, scope: 'meta.structure.dictionary.key.python' },
    { settings: { foreground: '#D5D8E0' }, scope: 'meta.diff.header' },
    { settings: { foreground: '#B38CFF' }, scope: 'storage' },
    { settings: { foreground: '#B38CFF' }, scope: 'storage.type' },
    { settings: { foreground: '#B38CFF' }, scope: ['storage.modifier', 'keyword.operator.noexcept'] },
    { settings: { foreground: '#82D99F' }, scope: ['string', 'meta.embedded.assembly'] },
    { settings: { foreground: '#82D99F' }, scope: 'string.tag' },
    { settings: { foreground: '#82D99F' }, scope: 'string.value' },
    { settings: { foreground: '#82D99F' }, scope: 'string.regexp' },
    { settings: { foreground: '#F2858C' }, scope: ['punctuation.definition.template-expression.begin', 'punctuation.definition.template-expression.end', 'punctuation.section.embedded'] },
    { settings: { foreground: '#B38CFF' }, scope: ['meta.template.expression'] },
    { settings: { foreground: '#D5D8E0' }, scope: ['support.type.vendored.property-name', 'support.type.property-name', 'source.css variable', 'source.coffee.embedded'] },
    { settings: { foreground: '#B38CFF' }, scope: 'keyword' },
    { settings: { foreground: '#B38CFF' }, scope: 'keyword.control' },
    { settings: { foreground: '#D5D8E0' }, scope: 'keyword.operator' },
    { settings: { foreground: '#B38CFF' }, scope: ['keyword.operator.new', 'keyword.operator.expression', 'keyword.operator.cast', 'keyword.operator.sizeof', 'keyword.operator.alignof', 'keyword.operator.typeid', 'keyword.operator.alignas', 'keyword.operator.instanceof', 'keyword.operator.logical.python', 'keyword.operator.wordlike'] },
    { settings: { foreground: '#F48CCA' }, scope: 'keyword.other.unit' },
    { settings: { foreground: '#80BBFF' }, scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'] },
    { settings: { foreground: '#9cdcfe' }, scope: 'support.function.git-rebase' },
    { settings: { foreground: '#b5cea8' }, scope: 'constant.sha.git-rebase' },
    { settings: { foreground: '#D5D8E0' }, scope: ['storage.modifier.import.java', 'variable.language.wildcard.java', 'storage.modifier.package.java'] },
    { settings: { foreground: '#DED47E' }, scope: 'variable.language' },
    { settings: { foreground: '#CC4B53' }, scope: 'log.error' },
    { settings: { foreground: '#EB9B61' }, scope: 'log.warning' },
    { settings: { foreground: '#F29D79' }, scope: ['entity.name.function', 'support.function', 'support.constant.handlebars', 'source.powershell variable.other.member', 'entity.name.operator.custom-literal'] },
    { settings: { foreground: '#F0D8FF' }, scope: ['support.class', 'support.type', 'entity.name.type', 'entity.name.namespace', 'entity.other.attribute', 'entity.name.scope-resolution', 'entity.name.class', 'storage.type.numeric.go', 'storage.type.byte.go', 'storage.type.boolean.go', 'storage.type.string.go', 'storage.type.uintptr.go', 'storage.type.error.go', 'storage.type.rune.go', 'storage.type.cs', 'storage.type.generic.cs', 'storage.type.modifier.cs', 'storage.type.variable.cs', 'storage.type.annotation.java', 'storage.type.generic.java', 'storage.type.java', 'storage.type.object.array.java', 'storage.type.primitive.array.java', 'storage.type.primitive.java', 'storage.type.token.java', 'storage.type.groovy', 'storage.type.annotation.groovy', 'storage.type.parameters.groovy', 'storage.type.generic.groovy', 'storage.type.object.array.groovy', 'storage.type.primitive.array.groovy', 'storage.type.primitive.groovy'] },
    { settings: { foreground: '#B38CFF' }, scope: ['meta.type.cast.expr', 'meta.type.new.expr', 'support.constant.math', 'support.constant.dom', 'support.constant.json', 'entity.other.inherited-class'] },
    { settings: { foreground: '#B38CFF' }, scope: ['keyword.control', 'source.cpp keyword.operator.new', 'keyword.operator.delete', 'keyword.other.using', 'keyword.other.directive.using', 'keyword.other.operator', 'entity.name.operator'] },
    { settings: { foreground: '#DED47E' }, scope: ['variable', 'meta.definition.variable.name', 'support.variable', 'entity.name.variable', 'constant.other.placeholder'] },
    { settings: { foreground: '#80BBFF' }, scope: ['variable.other.constant', 'variable.other.enummember'] },
    { settings: { foreground: '#E0E3EE' }, scope: ['meta.object-literal.key'] },
    { settings: { foreground: '#82D99F' }, scope: ['support.constant.property-value', 'support.constant.font-name', 'support.constant.media-type', 'support.constant.media', 'constant.other.color.rgb-value', 'constant.other.rgb-value', 'support.constant.color'] },
    { settings: { foreground: '#DED47E' }, scope: ['punctuation.definition.group.regexp', 'punctuation.definition.group.assertion.regexp', 'punctuation.definition.character-class.regexp', 'punctuation.character.set.begin.regexp', 'punctuation.character.set.end.regexp', 'keyword.operator.negation.regexp', 'support.other.parenthesis.regexp'] },
    { settings: { foreground: '#82D99F' }, scope: ['constant.character.character-class.regexp', 'constant.other.character-class.set.regexp', 'constant.other.character-class.regexp', 'constant.character.set.regexp'] },
    { settings: { foreground: '#E0E3EE' }, scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'] },
    { settings: { foreground: '#E0E3EE' }, scope: 'keyword.operator.quantifier.regexp' },
    { settings: { foreground: '#80BBFF' }, scope: ['constant.character', 'constant.other.option'] },
    { settings: { foreground: '#80BBFF' }, scope: 'constant.character.escape' },
    { settings: { foreground: '#82D99F' }, scope: 'entity.name.label' },
    { settings: { foreground: '#E0E3EE' }, scope: 'variable.other.property' },
];

const DEEP_BLUE_SEMANTIC_RULES = {
    newOperator: '#e0e3ee',
    stringLiteral: '#82d99f',
    customLiteral: '#e0e3ee',
    numberLiteral: '#f48cca',
};

// Hook VS Code's ColorThemeData prototype before WorkbenchThemeService initializes
if (!('__deepBlueThemeHooked' in window)) {
    window.__deepBlueThemeHooked = true;
    Object.defineProperty(Object.prototype, 'themeTokenColors', {
        configurable: true,
        set(value) {
            delete Object.prototype.themeTokenColors;
            Object.defineProperty(this, 'themeTokenColors', {
                value,
                writable: true,
                configurable: true,
                enumerable: true,
            });

            const proto = Object.getPrototypeOf(this);
            if (!proto || typeof proto.overwriteCustomColors !== 'function') {
                return;
            }

            const origOverwriteCustomColors = proto.overwriteCustomColors;
            const origReadSemanticTokenRules = proto.readSemanticTokenRules;
            const origClearCaches = proto.clearCaches;
            const origLoad = proto.load;
            const origSetCustomColors = proto.setCustomColors;
            const origSetCustomTokenColors = proto.setCustomTokenColors;
            const origSetCustomSemanticTokenColors = proto.setCustomSemanticTokenColors;
            const origSetTransientColors = proto.setTransientColors;

            let parsedColorMap = null;
            let parsedSemanticRules = null;

            const applyDeepBlueTheme = (theme) => {
                if (!theme || typeof theme !== 'object') {
                    return;
                }
                if (!parsedColorMap) {
                    const colorHolder = { customColorMap: {} };
                    origOverwriteCustomColors.call(colorHolder, DEEP_BLUE_COLORS);
                    parsedColorMap = colorHolder.customColorMap;
                }
                if (!parsedSemanticRules && typeof origReadSemanticTokenRules === 'function') {
                    const semHolder = { isThemeScope: () => false, customSemanticTokenRules: [] };
                    origReadSemanticTokenRules.call(semHolder, DEEP_BLUE_SEMANTIC_RULES);
                    parsedSemanticRules = semHolder.customSemanticTokenRules;
                }

                theme.colorMap = { ...parsedColorMap };
                theme.themeTokenColors = DEEP_BLUE_TOKEN_COLORS.map((r) => ({
                    scope: Array.isArray(r.scope) ? r.scope.slice() : r.scope,
                    settings: { ...r.settings },
                }));
                if (parsedSemanticRules) {
                    theme.semanticTokenRules = parsedSemanticRules.slice();
                }
                theme.themeSemanticHighlighting = true;
                if (typeof origClearCaches === 'function') {
                    origClearCaches.call(theme);
                }
            };

            Object.defineProperty(proto, 'themeTypeSelector', {
                configurable: true,
                get() {
                    return 'vs-dark';
                },
            });
            Object.defineProperty(proto, 'type', {
                configurable: true,
                get() {
                    return 'dark';
                },
            });
            Object.defineProperty(proto, 'classNames', {
                configurable: true,
                get() {
                    const parts = (this.id || 'vs-dark').split(' ').filter(Boolean);
                    parts[0] = 'vs-dark';
                    return parts;
                },
            });

            if (typeof origLoad === 'function') {
                proto.load = function (...args) {
                    return origLoad.apply(this, args).then((res) => {
                        applyDeepBlueTheme(this);
                        return res;
                    });
                };
            }
            if (typeof origSetCustomColors === 'function') {
                proto.setCustomColors = function (...args) {
                    applyDeepBlueTheme(this);
                    return origSetCustomColors.apply(this, args);
                };
            }
            if (typeof origSetCustomTokenColors === 'function') {
                proto.setCustomTokenColors = function (...args) {
                    applyDeepBlueTheme(this);
                    return origSetCustomTokenColors.apply(this, args);
                };
            }
            if (typeof origSetCustomSemanticTokenColors === 'function') {
                proto.setCustomSemanticTokenColors = function (...args) {
                    applyDeepBlueTheme(this);
                    return origSetCustomSemanticTokenColors.apply(this, args);
                };
            }
            if (typeof origSetTransientColors === 'function') {
                proto.setTransientColors = function (...args) {
                    applyDeepBlueTheme(this);
                    return origSetTransientColors.apply(this, args);
                };
            }
        },
    });
}

// Capture VS Code's internal Workbench Layout instance when workbenchGrid is initialized
if (!('__vscodeWorkbench' in window)) {
    Object.defineProperty(Object.prototype, 'workbenchGrid', {
        configurable: true,
        set(value) {
            Object.defineProperty(this, 'workbenchGrid', {
                value,
                writable: true,
                configurable: true,
                enumerable: true,
            });
            window.__vscodeWorkbench = this;
        },
    });
}

// Enable horizontal scrolling for File Explorer (ExplorerView)
if (!('__explorerHorizontalScrollHooked' in window)) {
    window.__explorerHorizontalScrollHooked = true;
    Object.defineProperty(Object.prototype, 'setTreeInputSequencer', {
        configurable: true,
        set(value) {
            delete Object.prototype.setTreeInputSequencer;
            Object.defineProperty(this, 'setTreeInputSequencer', {
                value,
                writable: true,
                configurable: true,
                enumerable: true,
            });
            window.__vscodeExplorerView = this;

            const proto = Object.getPrototypeOf(this);
            if (!proto || typeof proto.createTree !== 'function') {
                return;
            }

            const origCreateTree = proto.createTree;
            proto.createTree = function (...args) {
                const inst = this.instantiationService;
                let origCreateInstance = null;
                if (inst && typeof inst.createInstance === 'function') {
                    origCreateInstance = inst.createInstance;
                    inst.createInstance = function (ctor, ...cArgs) {
                        if (
                            cArgs[0] === 'FileExplorer' &&
                            cArgs[6] &&
                            typeof cArgs[6] === 'object'
                        ) {
                            cArgs[6].horizontalScrolling = true;
                        }
                        return origCreateInstance.apply(this, [ctor, ...cArgs]);
                    };
                }
                try {
                    const res = origCreateTree.apply(this, args);
                    if (this.tree && typeof this.tree.updateOptions === 'function') {
                        this.tree.updateOptions({ horizontalScrolling: true });
                    }
                    return res;
                } finally {
                    if (inst && origCreateInstance) {
                        inst.createInstance = origCreateInstance;
                    }
                }
            };
        },
    });
}

const ensureExplorerHorizontalScroll = () => {
    const explorerView =
        window.__vscodeExplorerView ||
        window.__vscodeWorkbench?.paneCompositeService
            ?.getActivePaneComposite?.(0)
            ?.getViewPaneContainer?.()
            ?.getExplorerView?.();

    if (!explorerView || !explorerView.tree) {
        return;
    }

    window.__vscodeExplorerView = explorerView;
    const isEditing = explorerView.treeContainer?.classList.contains('highlight');
    if (!isEditing && explorerView.tree.options?.horizontalScrolling !== true) {
        explorerView.tree.updateOptions({ horizontalScrolling: true });
    }
};

let rafId = null;
let isEditorHidden = false;
let savedAuxWidth = 0;
let savedSideBarWidth = 0;
let wasPanelVisible = false;

const applyEditorHidden = (hide) => {
    const wb = window.__vscodeWorkbench;
    isEditorHidden = hide;

    const switchBtn = document.querySelector('.custom-editor-switch');
    if (switchBtn) {
        switchBtn.classList.toggle('active', hide);
        switchBtn.setAttribute('aria-checked', String(hide));
        switchBtn.title = hide
            ? 'Hiện khung Text Editor'
            : 'Ẩn khung Text Editor (Mở rộng Secondary Panel)';
    }

    if (!wb || !wb.workbenchGrid) {
        return;
    }

    if (hide) {
        if (wb.isVisible('workbench.parts.auxiliarybar')) {
            const auxSize = wb.workbenchGrid.getViewSize(wb.auxiliaryBarPartView);
            if (auxSize && auxSize.width > 0) {
                savedAuxWidth = auxSize.width;
            }
        }
        if (wb.isVisible('workbench.parts.sidebar')) {
            const sideSize = wb.workbenchGrid.getViewSize(wb.sideBarPartView);
            if (sideSize && sideSize.width > 0) {
                savedSideBarWidth = sideSize.width;
            }
        }
        wasPanelVisible = wb.isVisible('workbench.parts.panel');

        wb.inMaximizedAuxiliaryBarTransition = true;
        wb.isAuxiliaryBarMaximized = () => true;
        wb.toggleMaximizedAuxiliaryBar = () => {};
        wb.setAuxiliaryBarMaximized = () => false;

        try {
            if (!wb.isVisible('workbench.parts.auxiliarybar')) {
                wb.setAuxiliaryBarHidden(false);
            }
            if (wasPanelVisible) {
                wb.setPanelHidden(true);
            }
            wb.setEditorHidden(true);

            if (wb.isVisible('workbench.parts.sidebar') && savedSideBarWidth > 0) {
                const sideSize = wb.workbenchGrid.getViewSize(wb.sideBarPartView);
                wb.workbenchGrid.resizeView(wb.sideBarPartView, {
                    width: savedSideBarWidth,
                    height: sideSize.height,
                });
            }
        } finally {
            wb.inMaximizedAuxiliaryBarTransition = false;
        }
    } else {
        delete wb.isAuxiliaryBarMaximized;
        delete wb.toggleMaximizedAuxiliaryBar;
        delete wb.setAuxiliaryBarMaximized;

        wb.inMaximizedAuxiliaryBarTransition = true;
        try {
            wb.setEditorHidden(false);
            if (wasPanelVisible) {
                wb.setPanelHidden(false);
            }
            if (savedAuxWidth > 0 && wb.isVisible('workbench.parts.auxiliarybar')) {
                const auxSize = wb.workbenchGrid.getViewSize(wb.auxiliaryBarPartView);
                wb.workbenchGrid.resizeView(wb.auxiliaryBarPartView, {
                    width: savedAuxWidth,
                    height: auxSize.height,
                });
            }
            if (savedSideBarWidth > 0 && wb.isVisible('workbench.parts.sidebar')) {
                const sideSize = wb.workbenchGrid.getViewSize(wb.sideBarPartView);
                wb.workbenchGrid.resizeView(wb.sideBarPartView, {
                    width: savedSideBarWidth,
                    height: sideSize.height,
                });
            }
        } finally {
            wb.inMaximizedAuxiliaryBarTransition = false;
        }
    }
};

const mountEditorSwitch = () => {
    const toolbarContainer = document.querySelector(
        '.monaco-workbench .part.titlebar > .titlebar-container > .titlebar-right > .action-toolbar-container'
    );
    if (!toolbarContainer || toolbarContainer.querySelector('.custom-editor-switch-container')) {
        return;
    }

    const container = document.createElement('div');
    container.className = 'custom-editor-switch-container';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'custom-editor-switch';
    btn.setAttribute('role', 'switch');
    btn.setAttribute('aria-checked', String(isEditorHidden));
    btn.title = 'Ẩn khung Text Editor (Mở rộng Secondary Panel)';

    const thumb = document.createElement('span');
    thumb.className = 'custom-editor-switch-thumb';
    btn.appendChild(thumb);

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        applyEditorHidden(!isEditorHidden);
    });

    container.appendChild(btn);
    toolbarContainer.prepend(container);
};

// Observe webviews and mount custom UI
const updateDOM = () => {
    rafId = null;
    mountEditorSwitch();
    ensureExplorerHorizontalScroll();

    const workbench = document.querySelector('.monaco-workbench');
    if (!workbench || workbench.classList.contains('floating-panels')) {
        return;
    }

    const iframes = document.querySelectorAll('iframe.webview.ready');
    for (const iframe of iframes) {
        if (iframe.dataset.customSized !== 'true') {
            iframe.style.width = 'calc(100% - 10px)';
            iframe.style.height = 'calc(100% - 10px)';
            iframe.style.borderRadius = 'var(--rounded-border-radius)';
            iframe.dataset.customSized = 'true';
        }
    }
};

const observer = new MutationObserver(() => {
    if (rafId === null) {
        rafId = requestAnimationFrame(updateDOM);
    }
});

if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
    updateDOM();
} else {
    window.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.body, { childList: true, subtree: true });
        updateDOM();
    });
}

// Restore normal layout sizes before VS Code saves state on reload/close
window.addEventListener(
    'beforeunload',
    () => {
        if (isEditorHidden) {
            applyEditorHidden(false);
        }
    },
    true
);

// Support Shift + Mouse Wheel horizontal scrolling in File Explorer on macOS
window.addEventListener(
    'wheel',
    (e) => {
        if (
            e.shiftKey &&
            e.deltaX === 0 &&
            e.deltaY !== 0 &&
            e.target instanceof Element &&
            e.target.closest('.explorer-folders-view')
        ) {
            const tree = window.__vscodeExplorerView?.tree;
            if (tree && typeof tree.scrollLeft === 'number') {
                tree.scrollLeft += e.deltaY;
                e.preventDefault();
                e.stopPropagation();
            }
        }
    },
    { capture: true, passive: false }
);

// Prevent Chromium focus/scrollIntoView from vertically scrolling the tab bar container
window.addEventListener(
    'scroll',
    (e) => {
        const target = e.target;
        if (
            target instanceof HTMLElement &&
            target.scrollTop !== 0 &&
            (target.classList.contains('title') ||
                target.classList.contains('tabs-and-actions-container') ||
                target.classList.contains('tabs-container') ||
                target.parentElement?.classList.contains('tabs-and-actions-container'))
        ) {
            target.scrollTop = 0;
        }
    },
    true
);



