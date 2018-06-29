/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,basicstyles,clipboard,button,toolbar,enterkey,entities,floatingspace,wysiwygarea,indent,indentlist,fakeobjects,link,list,undo';
	config.skin = 'bootstrapck';
	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for a single toolbar row.
	config.toolbarGroups = [
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' },
		{ name: 'undo' },
		{ name: 'redo' },
		{ name: 'subscript' },
		{ name: 'superscript' }
	];
	
	// add wordcount plugin
	// wordcount settings found plugins > wordcount > plugin.js
	config.extraPlugins = 'wordcount';
	
	// allow for browser spell check
	config.disableNativeSpellChecker = false;

	// The default plugins included in the basic setup define some buttons that
	// are not needed in a basic editor. They are removed here.
	config.removeButtons = 'Cut,Copy,Paste,Anchor,Underline,Strike,About';
	


	CKEDITOR.on( 'dialogDefinition', function( ev )
	   {
	      var dialogName = ev.data.name;
	      var dialogDefinition = ev.data.definition;
	      ev.data.definition.resizable = CKEDITOR.DIALOG_RESIZE_NONE;
	
		if ( dialogName == 'link' ){	
		
			dialogDefinition.removeContents('advanced');
			dialogDefinition.removeContents('target');
				
			var infoTab = dialogDefinition.getContents( 'info' );
			
			var linktypeField = infoTab.get( 'linkType' );
			var linkProtocolField = infoTab.get( 'protocol' );
			/* Remove it from the array of items */
			linktypeField['items'].splice(1, 2);
			linkProtocolField['items'].splice(1,3);
			
			
/*			dialogDefinition.removeContents('advanced');
			dialogDefinition.removeContents('target');*/
			
/*			var infoTab = dialogDefinition.getContents('info');*/
        	
/*			var protocolField = infoTab.get('protocol');
			protocolField['remove'] = 'news://';*/
/*	         var infoTab = dialogDefinition.getContents( 'info' );
	         infoTab.remove( 'protocol' );
			 infoTab.remove( 'linkType' );*/ 
	      }
	
	   });

	   
};
