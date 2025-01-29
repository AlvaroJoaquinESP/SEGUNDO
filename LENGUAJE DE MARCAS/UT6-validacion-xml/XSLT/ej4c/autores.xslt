<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"></xsl:output>

    <xsl:template match="/">

        <html>
            <body>
            <h2>Lista de autores</h2>
                <ul>
                    <xsl:for-each select="catalogo/libro/autores/autor[@nacimiento > 1700]">
                        <li>
                            <xsl:value-of select="."></xsl:value-of>
                        </li>
                    </xsl:for-each>


                </ul>
            </body>


        </html>


    </xsl:template>


</xsl:stylesheet>