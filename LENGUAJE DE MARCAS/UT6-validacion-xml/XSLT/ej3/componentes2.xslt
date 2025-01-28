<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"></xsl:output>

    <xsl:template match="/">
        <html>
            <body>
                <ul>
                    <xsl:for-each select="inventario/producto[@codigo]">
                        <li>
                            <xsl:value-of select="@codigo"></xsl:value-of>
                        </li>
                    </xsl:for-each>
                    <ul>
                        <xsl:for-each select="inventario/producto[peso > 2]">
                            <li>
                                <xsl:value-of select="peso"></xsl:value-of>
                            </li>
                        </xsl:for-each>
                    </ul>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>