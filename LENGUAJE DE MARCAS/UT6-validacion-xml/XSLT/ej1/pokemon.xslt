<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html"></xsl:output>

    <xsl:template match="/">

        <html>
            <body>

                <table border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Nivel</th>
                    </tr>
                    <xsl:for-each select="pokemonList/pokemon">
                        <tr>
                            <td>
                                <xsl:value-of select="nombre"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="tipo"></xsl:value-of>
                            </td>
                            <td>
                                <xsl:value-of select="nivel"></xsl:value-of>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>


            </body>


        </html>


    </xsl:template>
</xsl:stylesheet>