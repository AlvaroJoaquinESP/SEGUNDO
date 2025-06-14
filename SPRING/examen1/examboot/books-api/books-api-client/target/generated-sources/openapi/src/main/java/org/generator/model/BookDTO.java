/*
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.generator.model;

import java.util.Objects;
import java.util.Arrays;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import org.generator.model.Author;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonTypeName;

/**
 * BookDTO
 */
@JsonPropertyOrder({
  BookDTO.JSON_PROPERTY_ID,
  BookDTO.JSON_PROPERTY_TITLE,
  BookDTO.JSON_PROPERTY_ISBN,
  BookDTO.JSON_PROPERTY_GENRE,
  BookDTO.JSON_PROPERTY_PUBLISH_YEAR,
  BookDTO.JSON_PROPERTY_AUTHOR
})
@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-06-12T10:59:05.534167700+02:00[Europe/Madrid]", comments = "Generator version: 7.10.0")
public class BookDTO implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  @jakarta.annotation.Nullable
  private Long id;

  public static final String JSON_PROPERTY_TITLE = "title";
  @jakarta.annotation.Nullable
  private String title;

  public static final String JSON_PROPERTY_ISBN = "isbn";
  @jakarta.annotation.Nullable
  private String isbn;

  /**
   * Gets or Sets genre
   */
  public enum GenreEnum {
    NOVEL(String.valueOf("NOVEL")),
    
    FANTASY(String.valueOf("FANTASY")),
    
    ROMANCE(String.valueOf("ROMANCE")),
    
    PROGRAMMING(String.valueOf("PROGRAMMING"));

    private String value;

    GenreEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static GenreEnum fromValue(String value) {
      for (GenreEnum b : GenreEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_GENRE = "genre";
  @jakarta.annotation.Nullable
  private GenreEnum genre;

  public static final String JSON_PROPERTY_PUBLISH_YEAR = "publishYear";
  @jakarta.annotation.Nullable
  private Integer publishYear;

  public static final String JSON_PROPERTY_AUTHOR = "author";
  @jakarta.annotation.Nullable
  private Author author;

  public BookDTO() {
  }

  public BookDTO id(@jakarta.annotation.Nullable Long id) {
    
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Long getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(@jakarta.annotation.Nullable Long id) {
    this.id = id;
  }

  public BookDTO title(@jakarta.annotation.Nullable String title) {
    
    this.title = title;
    return this;
  }

  /**
   * Get title
   * @return title
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getTitle() {
    return title;
  }


  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTitle(@jakarta.annotation.Nullable String title) {
    this.title = title;
  }

  public BookDTO isbn(@jakarta.annotation.Nullable String isbn) {
    
    this.isbn = isbn;
    return this;
  }

  /**
   * Get isbn
   * @return isbn
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_ISBN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getIsbn() {
    return isbn;
  }


  @JsonProperty(JSON_PROPERTY_ISBN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsbn(@jakarta.annotation.Nullable String isbn) {
    this.isbn = isbn;
  }

  public BookDTO genre(@jakarta.annotation.Nullable GenreEnum genre) {
    
    this.genre = genre;
    return this;
  }

  /**
   * Get genre
   * @return genre
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_GENRE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public GenreEnum getGenre() {
    return genre;
  }


  @JsonProperty(JSON_PROPERTY_GENRE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGenre(@jakarta.annotation.Nullable GenreEnum genre) {
    this.genre = genre;
  }

  public BookDTO publishYear(@jakarta.annotation.Nullable Integer publishYear) {
    
    this.publishYear = publishYear;
    return this;
  }

  /**
   * Get publishYear
   * @return publishYear
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_PUBLISH_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getPublishYear() {
    return publishYear;
  }


  @JsonProperty(JSON_PROPERTY_PUBLISH_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPublishYear(@jakarta.annotation.Nullable Integer publishYear) {
    this.publishYear = publishYear;
  }

  public BookDTO author(@jakarta.annotation.Nullable Author author) {
    
    this.author = author;
    return this;
  }

  /**
   * Get author
   * @return author
   */
  @jakarta.annotation.Nullable
  @JsonProperty(JSON_PROPERTY_AUTHOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Author getAuthor() {
    return author;
  }


  @JsonProperty(JSON_PROPERTY_AUTHOR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAuthor(@jakarta.annotation.Nullable Author author) {
    this.author = author;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BookDTO bookDTO = (BookDTO) o;
    return Objects.equals(this.id, bookDTO.id) &&
        Objects.equals(this.title, bookDTO.title) &&
        Objects.equals(this.isbn, bookDTO.isbn) &&
        Objects.equals(this.genre, bookDTO.genre) &&
        Objects.equals(this.publishYear, bookDTO.publishYear) &&
        Objects.equals(this.author, bookDTO.author);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, title, isbn, genre, publishYear, author);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BookDTO {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    isbn: ").append(toIndentedString(isbn)).append("\n");
    sb.append("    genre: ").append(toIndentedString(genre)).append("\n");
    sb.append("    publishYear: ").append(toIndentedString(publishYear)).append("\n");
    sb.append("    author: ").append(toIndentedString(author)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

