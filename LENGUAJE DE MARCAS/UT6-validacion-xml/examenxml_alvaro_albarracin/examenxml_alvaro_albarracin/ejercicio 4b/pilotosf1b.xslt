<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"></xsl:output>

    <xsl:template match="/">

        <html>
            <body>
                <table border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Equipo</th>
                        <th>Titulos</th>
                        <th>Nacionalidad</th>
                    </tr>
                    <xsl:for-each select="pilotosF1/piloto[@nacionalidad = 'ESP']">
                        <tr>
                            <td>
                                <xsl:value-of select="nombre" />
                            </td>

                            <td>
                                <xsl:value-of select="apellido" />
                            </td>

                            <td>
                                <xsl:value-of select="equipo" />
                            </td>

                            <td>
                                <xsl:value-of select="titulos" />
                            </td>

                            <td>
                                <xsl:value-of select="@nacionalidad" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>