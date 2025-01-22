<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <style>
                    table{border-collapse:collapse}

                    th,td{border: 1px solid black}

                </style>
            </head>
            <body>
                <h2>My Collection</h2>
                <table>

                    <th>Title</th>
                    <th>Artist</th>
                    <th>Country</th>
                    <xsl:apply-templates />


                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="cd">
        <tr>
            <xsl:apply-templates select="title" />
            <xsl:apply-templates select="artist" />
            <xsl:apply-templates select="country" />
        </tr>
    </xsl:template>

    <xsl:template match="title">
        <td>
            <xsl:value-of select="." />
        </td>
  
  
    </xsl:template>

    <xsl:template match="artist">
        <td>
            <xsl:value-of select="." />
        </td>
    </xsl:template>

    <xsl:template match="country">
        <td>
            <xsl:value-of select="." />
        </td>
    </xsl:template>


</xsl:stylesheet>