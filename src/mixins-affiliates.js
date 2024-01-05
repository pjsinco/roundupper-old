const marked = require('marked')
import mixins from './mixins';

export default {

    mixins: [mixins],

    mounted() {
      const renderer = {
        paragraph(text) {
          return `
            <p style="color: #686d75; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: normal; line-height: 19.5px; margin: 0 0 0 0;">${text}<br>&nbsp;</p>\n`
        },

        link(href, title, text) {
          return `
            <a href="${href}" 
               style="color: #22a49c; font-weight: bold; text-decoration: none;"
               title="${title}">${text}</a>`;
        },

        heading(text, level, raw) {
          const h3styles = [
            'margin-left: 0',
            'margin-right: 0',
            'margin-top: 0',
            'margin-bottom: 19.5px',
            'font-family: Arial, Helvetica, sans-serif',
            'font-size: 22px',
            'font-weight: normal',
            'line-height: 33px',
            'text-align: left',
            'color: #235685',
          ];

          return `<h3 style="${h3styles.join('; ')}">${text}</h3>\n`;
        },

        image(href, title, text) {
          return `
            <img alt="${text}" src="${href}" border="0" width="590" align="middle" style="margin: 0; text-align: center;" class="img" />`;

          return `
            <table width="100%" cellpadding="0" cellspacing="0" style="border: none; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tbody>
                <tr>
                  <td style="line-height:1px; text-align: center;" align="center">
                    <img alt="${text}" src="${href}" border="0" width="590" align="middle" style="margin: 0; text-align: center;" class="img" />
                  </td>
                </tr>
              </tbody>
            </table>\n`;
        },

        list(body, ordered) {
          const listStyles = [
            'margin: 0 0 19.5px 0',
            'padding-left: 26px',
            'font-family: Arial, Helvetica, sans-serif',
            'font-size: 13px',
            'font-weight: normal',
            'line-height: 19.5px',
            'color: #686d75',
          ];

          if (ordered) {
            return `<ol style="${listStyles.join('; ')}">${body}</ol>`
          }

          return `<ul style="${listStyles.join('; ')}">${body}</ul>`
        },

        listitem(text) {
          return `<li style="padding-left: 3.25px; text-align: left;">${text}</li>`;
        }
      };


      marked.use({ renderer });

      marked.setOptions({
        gfm: true,
        breaks: true,
        headerIds: false,
      });

      this.$nextTick(() => {
        this.input = `### Lorem headline\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n`;
      });

    }
}
